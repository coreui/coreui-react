export default {
  plain: {
    fontFamily: 'Inconsolata',
    color: '#ccc',
    backgroundColor: '#2d2d2d',
  },
  styles: [
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#ccc',
      },
    },
    {
      types: ['tag', 'attr-name', 'namespace', 'deleted'],
      style: {
        color: '#ec5975',
      },
    },
    {
      types: ['function-name'],
      style: {
        color: '#6196cc',
      },
    },
    {
      types: ['boolean', 'number', 'function'],
      style: {
        color: '#f08d49',
      },
    },
    {
      types: ['property', 'class-name', 'constant', 'symbol'],
      style: {
        color: '#f08d49',
      },
    },
    {
      types: ['property', 'class-name', 'constant', 'symbol'],
      style: {
        color: '#f8c555',
      },
    },
    {
      types: ['selector', 'important', 'atrule', 'keyword', 'builtin'],
      style: {
        color: '#cc99cd',
      },
    },
    {
      types: ['string', 'char', 'attr-value', 'regex', 'variable'],
      style: {
        color: '#7ec699',
      },
    },
    {
      types: ['string', 'char', 'attr-value', 'regex', 'variable'],
      style: {
        color: '#7ec699',
      },
    },
    {
      types: ['operator', 'entity', 'url'],
      style: {
        color: '#67cdcc',
      },
    },
  ],
}
