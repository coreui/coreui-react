export default {
  title: 'CoreUI for React.js',
  public: './public',
  base: '/react/docs/4.0/',
  ignore: ['CHANGELOG.md', 'README.md'],
  typescript: true,
  menu: [
    {
      name: 'Getting started',
    },
    {
      name: 'Layout',
    },
    {
      name: 'Forms', // manually ordered menu "Forms"
      menu: ['Overview', 'Form control', 'Select', 'Checks & radios', 'Range'], // ordered items for "Forms"
    },
    {
      name: 'Components', // manually ordered menu "Components"
    },
    {
      name: 'Migration', // manually ordered menu "Migration"
    },
  ],
}
