import { Prism } from 'prism-react-renderer'

// prismjs language grammars attach themselves to the global Prism instance, so
// it has to be exposed before any `prismjs/components/*` module is loaded.
;(globalThis as typeof globalThis & { Prism: typeof Prism }).Prism = Prism
