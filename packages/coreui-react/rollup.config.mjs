import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { readFileSync } from 'node:fs'
import { dirname } from 'node:path'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

const DIR_CJS = dirname(pkg.main)
const DIR_ESM = dirname(pkg.module)
const ESM = process.env.ESM === 'true'

const plugins = [
  resolve(),
  typescript({
    exclude: ['**/__tests__/**'],
    tsconfig: './tsconfig.json',
    compilerOptions: {
      declarationDir: ESM ? DIR_ESM : DIR_CJS,
      outDir: ESM ? DIR_ESM : DIR_CJS,
    },
  }),
  commonjs({
    include: ['../../node_modules/**'],
  }),
]

const external = ['@popperjs/core', 'prop-types', 'react', 'react-dom']

const rollupConfig = {
  input: 'src/index.ts',
  output: {
    dir: ESM ? DIR_ESM : DIR_CJS,
    format: ESM ? 'esm' : 'cjs',
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
    sourcemapPathTransform: (relativeSourcePath) => {
      return relativeSourcePath
        .replace('../../node_modules/', '../')
        .replace('../src/', 'src/')
    },
  },
  external,
  plugins,
}

export default rollupConfig
