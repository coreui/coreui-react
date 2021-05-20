import { FC } from 'react';
import { Triggers } from '../Types';
import { CButtonProps } from '../button/CButton';
export interface CDropdownToggleProps extends CButtonProps {
    /**
     * Enables pseudo element caret on toggler. [docs]
     *
     * @default true
     */
    caret?: boolean;
    /**
     * Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret. [docs]
     */
    split?: boolean;
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. [docs]
     */
    trigger?: Triggers | Triggers[];
}
export declare const CDropdownToggle: FC<CDropdownToggleProps>;
