export function getFloat8(dataView: DataView, byteOffset: number) {
    const byte = dataView.getUint8(byteOffset);
    const sign = (byte & 0x80) ? -1 : 1;
    const exponent = (byte >> 3) & 0x0F; // 4-bit exponent
    const mantissa = byte & 0x07; // 3-bit mantissa

    if (exponent === 0) {
        // Subnormal number
        return sign * (mantissa / 8) * Math.pow(2, -6);
    } else if (exponent === 15) {
        // NaN or Infinity
        return mantissa ? NaN : sign * Infinity;
    }

    // Normalized number
    return sign * (1 + mantissa / 8) * Math.pow(2, exponent - 7);
}

export function setFloat8(dataView: DataView, byteOffset: number, value: number) {
    if (isNaN(value)) {
        dataView.setUint8(byteOffset, 0x7F); // NaN
        return;
    }

    if (value === Infinity) {
        dataView.setUint8(byteOffset, 0x78); // +Inf
        return;
    }
    if (value === -Infinity) {
        dataView.setUint8(byteOffset, 0xF8); // -Inf
        return;
    }

    let sign = value < 0 ? 0x80 : 0x00;
    value = Math.abs(value);

    let exponent = Math.floor(Math.log2(value));
    let mantissa = Math.round((value / Math.pow(2, exponent) - 1) * 8);

    if (exponent < -6) {
        // Subnormal case
        exponent = 0;
        mantissa = Math.round(value / Math.pow(2, -6) * 8);
    } else {
        exponent += 7;
    }

    if (exponent > 15) {
        // Overflow, store as Infinity
        dataView.setUint8(byteOffset, sign | 0x78);
        return;
    }

    // Encode final byte
    const byte = sign | (exponent << 3) | mantissa;
    dataView.setUint8(byteOffset, byte);
}

