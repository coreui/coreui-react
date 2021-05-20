import React, { ElementType, HTMLAttributes } from 'react';
import { Colors } from '../Types';
export interface CNavbarProps extends HTMLAttributes<HTMLDivElement> {
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
     * Sets if the color of text should be colored for a light or dark dark background. [docs]
     *
     * @type 'dark' | 'light'
     */
    colorScheme?: 'dark' | 'light';
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'nav'
     */
    component?: string | ElementType;
    /**
     * Defines optional container wrapping children elements.
     *
     * @type boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'
     */
    container?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
    /**
     * Defines the responsive breakpoint to determine when content collapses. [docs]
     */
    expand?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /**
     * Place component in non-static positions. [docs]
     *
     * @type 'fixed-top' | 'fixed-bottom' | 'sticky-top'
     */
    placement?: 'fixed-top' | 'fixed-bottom' | 'sticky-top';
}
export declare const CNavbar: React.ForwardRefExoticComponent<CNavbarProps & React.RefAttributes<HTMLDivElement>>;
