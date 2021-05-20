import React, { ElementType, HTMLAttributes } from 'react';
import { Colors } from '../Types';
export interface CListGroupItemProps extends HTMLAttributes<HTMLLIElement | HTMLAnchorElement | HTMLButtonElement> {
    /**
     * Toggle the active state for the component. [docs]
     */
    active?: boolean;
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color?: Colors;
    /**
     * Toggle the disabled state for the component. [docs]
     */
    disabled?: boolean;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'li'
     */
    component?: string | ElementType;
}
export declare const CListGroupItem: React.ForwardRefExoticComponent<CListGroupItemProps & React.RefAttributes<HTMLLIElement | HTMLAnchorElement | HTMLButtonElement>>;
