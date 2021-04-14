import { media } from '~theme/breakpoints'

export const container = {
  display: 'grid',
  gridArea: 'main',
  gridTemplateAreas: '"intro toc" "content toc"',
  gridTemplateColumns: '4fr 1fr',
  gridTemplateRows: 'auto 1fr',
  'h2:not(:first-child)': {
    marginTop: '3rem'
  },
  'h3:not(:first-child)': {
    marginTop: '2rem'
  }

  // backgroundColor: 'background',
  // position: 'relative',
  // maxWidth: 960,
  // py: 5,
  // px: 4,
  // variant: 'styles.Container',
  // [media.tablet]: {
  //   py: 4,
  //   px: 4,
  //   pt: 5,
  // },
}


// grid-area: main; 
//grid-template-areas:
//         "intro toc"
//         "content toc";
//     grid-template-columns: 4fr 1fr;
//     grid-template-rows: auto 1fr;