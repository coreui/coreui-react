# gatsby-remark-embed-markdown

Embeds the content of a specified markdown file as HTML within another markdown file.

## Overview

### Embedding Files

For example, given the following project directory structure:

```
./examples/
├── sample-markdown-file.md
```

Example of contents in `/examples/sample-markdown-file.md`:
```md
## This is an example of an embedded markdown fragment.

```


The following markdown syntax is used to embed the contents of these files:

```md
# Sample Markdown

`markdown:sample-markdown-file.md`

```

The resulting HTML for the above markdown would look something like this:

```html
<h1>Sample Markdown</h1>
<div class="markdown-fragment">
  <h2>This is an example of an embedded markdown fragment.</h2>
</div>
```

## Installation

`npm install --save gatsby-remark-embed-markdown`

## How to use

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-markdown",
            options: {
              // Example code links are relative to this dir.
              // eg examples/path/to/file.js
              directory: `${__dirname}/examples/`,
            }
          }
        ]
      }
    }
  ]
}
```


If you are looking to embed markdown in a code block, look into the [gatsby-remark-embed-snippet](https://www.gatsbyjs.org/packages/gatsby-remark-embed-snippet) plugin.
