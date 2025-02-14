"use strict";

// src/memory.ts
var defaultOptions = {
  version: 1 /* V1 */,
  name: "ELS",
  defaultSize: 1024 * 10,
  getBuffer: (size, before) => {
    const memory = new Uint8Array(size);
    if (before) {
      memory.set(before);
    }
    return memory;
  }
};
var MotorMemory = class {
  _buffer;
  _emptyBlocks;
  _dataView;
  _getBuffer;
  get buffer() {
    return this._buffer;
  }
  get dataView() {
    return this._dataView;
  }
  constructor(options = {}) {
    const currentOptions = { ...defaultOptions, ...options };
    this._getBuffer = currentOptions.getBuffer;
    this._buffer = this._getBuffer(currentOptions.defaultSize);
    this._emptyBlocks = [{ start: 0, length: currentOptions.defaultSize }];
    this._dataView = new DataView(this._buffer.buffer);
  }
  _extend(size) {
    this._buffer = this._getBuffer(size + this._buffer.length, this._buffer);
    this._dataView = new DataView(this._buffer.buffer);
    this.free({ start: this._buffer.length, length: size });
  }
  allocate(size) {
    if (size == 0) {
      return 0;
    }
    let block = this._emptyBlocks.find((b) => b.length >= size);
    if (!block) {
      this._extend(Math.max(size, this._buffer.length));
      block = this._emptyBlocks.find((b) => b.length >= size);
    }
    if (!block) {
      throw new Error("Cannot allocate memory");
    }
    if (block.length > size) {
      this._emptyBlocks.push({ start: block.start + size, length: block.length - size });
    }
    this._emptyBlocks = this._emptyBlocks.filter((b) => b.start !== block.start);
    this._emptyBlocks.sort((a, b) => a.start - b.start);
    this.buffer.fill(0, block.start, block.start + size);
    return block.start;
  }
  free(block) {
    if (block.length == 0) {
      return;
    }
    const blockBefore = this._emptyBlocks.find((b) => b.start + b.length === block.start);
    const blockAfter = this._emptyBlocks.find((b) => b.start === block.start + block.length);
    if (blockBefore) {
      this._emptyBlocks = this._emptyBlocks.filter((b) => b.start == blockBefore.start);
      this._emptyBlocks.push({ start: blockBefore.start, length: blockBefore.length + block.length });
    } else if (blockAfter) {
      this._emptyBlocks = this._emptyBlocks.filter((b) => b.start == blockAfter.start);
      this._emptyBlocks.push({ start: block.start, length: block.length + blockAfter.length });
    } else {
      this._emptyBlocks.push(block);
    }
    this._emptyBlocks.sort((a, b) => a.start - b.start);
  }
  shrink(size) {
    const lastBlock = this._emptyBlocks[this._emptyBlocks.length - 1];
    if (size === void 0) {
      size = lastBlock.length;
    }
    size = Math.min(size, lastBlock.length);
    const sizeDiff = this._buffer.length - size;
    this._buffer = this._buffer.slice(0, sizeDiff);
    this._dataView = new DataView(this._buffer.buffer);
    if (size < lastBlock.length) {
      this._emptyBlocks[this._emptyBlocks.length - 1] = { start: lastBlock.start, length: size };
    } else {
      this._emptyBlocks.pop();
    }
  }
  save() {
    let offset = 0;
    const blocks = [];
    this._emptyBlocks.forEach((block) => {
      const length = block.start - offset;
      if (length != 0) {
        blocks.push({ start: offset, length, data: this._buffer.slice(offset, block.start) });
      }
      offset = block.start + block.length;
    });
    const buffer = new Uint8Array(blocks.reduce((acc, block) => acc + block.length + 8, 0));
    let view = new DataView(buffer.buffer);
    offset = 0;
    blocks.forEach((block) => {
      view.setUint32(offset, block.start, true);
      view.setUint32(offset + 4, block.length, true);
      buffer.set(block.data, offset + 8);
      offset += block.length + 8;
    });
    return buffer;
  }
  clear() {
    this._emptyBlocks = [{ start: 0, length: this._buffer.length }];
  }
  allocateBlock(start, length) {
    const block = this._emptyBlocks.find((b) => b.start <= start && b.start + b.length >= start + length);
    if (!block) {
      throw new Error("Cannot allocate block");
    }
    if (block.start < start) {
      this._emptyBlocks.push({ start: block.start, length: start - block.start });
    }
    if (block.start + block.length > start + length) {
      this._emptyBlocks.push({ start: start + length, length: block.start + block.length - start - length });
    }
    this._emptyBlocks = this._emptyBlocks.filter((b) => b.start !== block.start);
    this._emptyBlocks.sort((a, b) => a.start - b.start);
  }
  load(buffer, loadOffset) {
    if (loadOffset + buffer.length > this._buffer.length) {
      this._extend(loadOffset + buffer.length - this._buffer.length);
    }
    const blocks = [];
    const dataView = new DataView(buffer.buffer);
    let offset = 0;
    while (offset < buffer.length) {
      const start = dataView.getUint32(offset, true);
      const length = dataView.getUint32(offset + 4, true);
      blocks.push({ start, length, data: buffer.slice(offset + 8, offset + 8 + length) });
      offset += length + 8;
    }
    blocks.forEach((block) => {
      this.allocateBlock(loadOffset + block.start, block.length);
      this._buffer.set(block.data, loadOffset + block.start);
    });
  }
  copy(from, to, length) {
    this._buffer.copyWithin(to, from, from + length);
  }
};

// src/utils/assert-type.ts
function motorAssertType(value) {
  const keys = Object.keys(value);
  const size = keys.find((key) => key === "size");
  if (size === void 0) {
    throw new Error("Type must have a size property");
  }
  return value;
}

// src/utils/singleton.ts
var singletonMap = /* @__PURE__ */ new Map();
function motorSingleton(constructor, ...args) {
  if (!singletonMap.has(constructor)) {
    singletonMap.set(constructor, new constructor(...args));
  }
  return singletonMap.get(constructor);
}

// src/instance.ts
var MotorInstance = class _MotorInstance {
  constructor(defaultValue, memory = motorSingleton(MotorMemory), address = memory.allocate(motorAssertType(this.constructor).size)) {
    this.memory = memory;
    this.address = address;
    if (defaultValue !== void 0)
      this.set(defaultValue);
  }
  set(value) {
    if (value instanceof _MotorInstance) {
      this.write(value.read());
    } else {
      this.write(value);
    }
  }
  free() {
    this.memory.free({
      start: this.address,
      length: motorAssertType(this.constructor).size
    });
  }
  toString() {
    return JSON.stringify(this.read(), null, 4);
  }
};

// src/type/float.type.ts
var MotorFloat = class extends MotorInstance {
  write(value) {
    this.memory.dataView.setFloat32(this.address, value);
  }
  read() {
    return this.memory.dataView.getFloat32(this.address);
  }
  static size = 4;
};

// src/index.ts
var f = new MotorFloat(1);
console.log(f.toString());
