module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CoreUIReact',
      externals: {
        react: 'React'
      }
    }
  }
}
