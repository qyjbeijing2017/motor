import { createDefaultEsmLegacyPreset, type JestConfigWithTsJest } from 'ts-jest'

const presetConfig = createDefaultEsmLegacyPreset({
})

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  // preset: 'ts-jest', // 使用 ts-jest 提供的 ESM 预设
  // testEnvironment: 'node',
  // // 如果你只用 .ts 文件做测试，extensionsToTreatAsEsm 只需要包含 .ts
  // extensionsToTreatAsEsm: ['.ts'],
  // globals: {
  //   'ts-jest': {
  //     useESM: true, // 启用 ESM 模式
  //   },
  // },
}

export default jestConfig