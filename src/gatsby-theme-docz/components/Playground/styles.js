import * as mixins from '~utils/mixins'

export const editor = theme => ({
  p: 2,
  background: theme.plain.backgroundColor,
  borderTop: 0,
  // fontFamily: 'monospace',
  // fontSize: 18,
  '* > textarea:focus': {
    outline: 'none',
  },
})

export const error = {
  m: 0,
  py: 2,
  px: 3,
  bg: '#FF4757',
  fontSize: 1,
  color: 'white',
  whiteSpace: 'pre-wrap',
}

export const previewWrapper = {
  position: 'relative',
  margin: '1rem 0 0',
}

export const wrapper = () => ({
  height: 'auto',
  display: 'block',
  minHeight: '100%',
  width: 'calc(100% - 2px)',
  bg: 'playground.bg',
})

export const wrapperBorder = (content, showingCode) => {
  let borderRadius = 4
  if (showingCode) {
    borderRadius = content === 'preview' ? '4px 4px 0 0' : '0 0 4px 4px'
  }

  return {
    border: t => `1px solid ${t.colors.playground.border}`,
    borderTop: content === 'editor' ? 0 : undefined,
    borderRadius,
  }
}

export const preview = {
  margin: 0,
  padding: '20px',
  '.avatar + .avatar': {
    margin: '.25rem .125rem'
  },
  '.badge + .badge': {
    margin: '0 .125rem'
  },
  '> .btn': {
    margin: '.25rem .125rem'
  },
  // '.btn-group .btn': {
  //   margin: '0'
  // },
  '> .btn-group': {
    margin: '.25rem .125rem'
  },
  '.fixed-bottom': {
    position: 'static',
    margin: '1rem -1.25rem -1.25rem'
  },
  '.fixed-top': {
    position: 'static',
    margin: '-1.25rem -1.25rem 1rem'
  },
  '.sticky-top': {
    position: 'static',
    margin: '-1.25rem -1.25rem 1rem'
  },
  '.spinner-border + .spinner-border': {
    margin: '0 .125rem'
  },
  '.spinner-grow + .spinner-grow': {
    margin: '0 .125rem'
  },
}

export const buttons = {
  zIndex: 9,
  display: 'flex',
  position: 'absolute',
  bottom: -20,
  right: 4,
}

export const button = {
  ...mixins.ghostButton,
  display: 'flex',
  alignItems: 'center',
  py: 1,
  p: 2,
  bg: 'border',
  color: 'muted',
  borderRadius: '0 0 3px 3px',
  '& ~ &': {
    ml: 1,
  },
}

export const link = {
  py: 0,
  ml: 1,
  height: 22,
}
