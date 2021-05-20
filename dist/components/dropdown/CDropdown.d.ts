import React, { ElementType, HTMLAttributes } from 'react';
import { Placements } from '../Types';
export declare type Directions = 'start' | 'end';
export declare type Breakpoints = {
    xs: Directions;
} | {
    sm: Directions;
} | {
    md: Directions;
} | {
    lg: Directions;
} | {
    xl: Directions;
} | {
    xxl: Directions;
};
export declare type Alignments = Directions | Breakpoints;
export interface CDropdownProps extends HTMLAttributes<HTMLDivElement | HTMLLIElement> {
    /**
     * @type { 'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'} }
     */
    alignment?: Alignments;
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'div'
     */
    component?: string | ElementType;
    /**
     * Sets a darker color scheme to match a dark navbar.
     */
    dark?: boolean;
    /**
     * Sets a specified  direction and location of the dropdown menu. [docs]
     *
     * @type 'dropup' | 'dropend' | 'dropstart'
     */
    direction?: 'dropup' | 'dropend' | 'dropstart';
    /**
     * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. [docs]
     *
     * @type 'auto' | 'top-end' | 'top' | 'top-start' | 'bottom-end' | 'bottom' | 'bottom-start' | 'right-start' | 'right' | 'right-end' | 'left-start' | 'left' | 'left-end'
     * @default 'bottom-start'
     */
    placement?: Placements;
    /**
     * If you want to disable dynamic positioning set this property to `true`.
     */
    popper?: boolean;
    /**
     * Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item. [docs]
     */
    variant?: 'btn-group' | 'dropdown' | 'input-group' | 'nav-item';
    /**
     * Toggle the visibility of dropdown menu component. [docs]
     *
     * @default false
     */
    visible?: boolean;
}
interface ContextProps extends CDropdownProps {
    setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}
export declare const CDropdownContext: React.Context<ContextProps>;
export declare const CDropdown: React.ForwardRefExoticComponent<CDropdownProps & React.RefAttributes<HTMLDivElement | HTMLLIElement>>;
export {};
