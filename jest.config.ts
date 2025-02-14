export default {
  extensionsToTreatAsEsm: ['.ts', '.js'], // 把 .js 文件也当作 ESM 处理
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }],
    '^.+\\.js$': 'babel-jest',  // 使用 Babel 处理 JS 文件
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  globals: {
    'ts-jest': {
      useESM: true, // 启用 ts-jest ESM 支持
    },
  },
};
