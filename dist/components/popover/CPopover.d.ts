import { FC, ReactElement, ReactNode } from 'react';
import { Triggers } from '../Types';
export interface CPopoverProps {
    children: ReactElement;
    /**
     * Content node for your component. [docs]
     */
    content: ReactNode;
    /**
     * Offset of the popover relative to its target. [docs]
     * @default '[0, 8]'
     */
    offset?: [number, number];
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
     * @type 'top' | 'right' | 'bottom' | 'left'
     * @default 'top'
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * Toggle the visibility of popover component. [docs]
     *
     * @default true
     */
    visible?: boolean;
}
export declare const CPopover: FC<CPopoverProps>;
