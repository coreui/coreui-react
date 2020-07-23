import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const external = ['react', 'react-dom', 'react-router-dom', 'react-dom/server']
// const external = id => id.includes('@babel/runtime')

const plugins = [
  babel({
    // Only transpile our source code
    exclude: 'node_modules/**',
    // Include the helpers in the bundle, at most one copy of each
    babelHelpers: 'runtime'
  }),
  peerDepsExternal(),
  resolve({
    // module: true,
    // browser: true,
    // jsnext: true,
    // preferBuiltins: false,
    extensions: ['.js', '.json', '.jsx'],
    dedupe: ['react', 'react-dom', 'react-router-dom', 'react-dom/server']
  }),
  commonjs(),
  postcss()
]

const rollupConfig = {
  input: `./src/index.js`,
  output: {
    file: `./lib/index.js`,
    format: 'cjs',
    name: 'coreui-react'
  },
  external,
  plugins
}

module.exports = rollupConfig