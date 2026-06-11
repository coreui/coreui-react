// Chips advertise their own focusability via `data-coreui-chip-focusable`,
// so containers (CChipSet, CChipInput) read it instead of re-deriving it.
export const SELECTOR_CHIP_FOCUSABLE = '[data-coreui-chip-focusable="true"]:not(.disabled)'
