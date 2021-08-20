jest.mock(`fs`, () => {
  return {
    existsSync: jest.fn(),
    readFileSync: jest.fn()
  }
});

const Remark = require(`remark`);
const fs = require(`fs`);
const plugin = require('../index');
const remark = new Remark();

describe('gatsby-remark-embed-markdown', () => {
  const markdown = '# This is a heading';

  beforeEach(() => {
    fs.existsSync.mockReset();
    fs.existsSync.mockReturnValue(true);

    fs.readFileSync.mockReset();
    fs.readFileSync.mockReturnValue(`const foo = "bar";`);
  });

  it('should embed markdown', () => {
    fs.existsSync.mockImplementation(path => path !== `examples/hello-world.md`);
    const markdownAST = remark.parse(`markdown:hello-world.md`);

    expect(() => plugin({ markdownAST })).toThrow(
      `Required option "directory" not specified`
    )
  });

  it(`should error if the specified directory does not exist`, () => {
    fs.existsSync.mockReturnValue(false);

    const markdownAST = remark.parse(`\`markdown:hello-world.js\``);

    expect(() => plugin({ markdownAST }, { directory: `invalid` })).toThrow(
      `Invalid directory specified "invalid"`
    )
  });

  it(`should error if an invalid file path is specified`, () => {
    fs.existsSync.mockImplementation(path => path !== `examples/hello-world.md`);

    const markdownAST = remark.parse(`\`markdown:hello-world.md\``);

    expect(() => plugin({ markdownAST }, { directory: `examples` })).toThrow(
      `Invalid fragment specified; no such file "examples/hello-world.md"`
    )
  });

  it(`should convert embedded link to fragment to markdown`, () => {
    fs.readFileSync.mockReturnValue('# Hello World');
    const markdownAST = remark.parse(`\`markdown:hello-world.md\``);
    const transformed = plugin({ markdownAST }, { directory: `examples` });

    expect(transformed.children[0].children[0].value)
      .toBe(`<div class="markdown-fragment"><h1>Hello World</h1>
</div>`);
  });

});

