import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import css from 'rollup-plugin-import-css'
import { readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      sourcemapPathTransform: (relativeSourcePath) => {
        return relativeSourcePath
          .replace('../../node_modules/', '../')
          .replace('../packages/coreui-icons-react', '..')
      },
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
      sourcemapPathTransform: (relativeSourcePath) => {
        return relativeSourcePath
          .replace('../../node_modules/', '../')
          .replace('../packages/coreui-icons-react', '..')
      },
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    css(),
    resolve(),
    typescript({
      exclude: ['**/__tests__/**'],
      tsconfig: './tsconfig.json',
    }),
    commonjs({
      include: ['../../node_modules/**'],
    }),
  ],
}
