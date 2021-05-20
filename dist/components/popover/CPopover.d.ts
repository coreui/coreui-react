import { FC, ReactNode } from 'react';
import { Placements, Triggers } from '../Types';
export interface CPopoverProps {
    children: JSX.Element;
    /**
     * Content node for your component. [docs]
     */
    content: ReactNode;
    /**
     * Title node for your component. [docs]
     */
    title?: ReactNode;
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. [docs]
     */
    trigger?: Triggers | Triggers[];
    /**
     * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. [docs]
     *
     * @type 'auto' | 'top-end' | 'top' | 'top-start' | 'bottom-end' | 'bottom' | 'bottom-start' | 'right-start' | 'right' | 'right-end' | 'left-start' | 'left' | 'left-end'
     * @default 'bottom'
     */
    placement?: Placements | 'start' | 'end';
    /**
     * Toggle the visibility of popover component. [docs]
     *
     * @default true
     */
    visible?: boolean;
}
export declare const CPopover: FC<CPopoverProps>;
