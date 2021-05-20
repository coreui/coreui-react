import React, { ElementType, HTMLAttributes } from 'react';
export interface CNavProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement | HTMLOListElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'ul'
     */
    component?: string | ElementType;
    /**
     * Specify a layout type for component. [docs]
     */
    layout?: 'fill' | 'justified';
    /**
     * Set the nav variant to tabs or pills. [docs]
     */
    variant?: 'tabs' | 'pills';
}
export declare const CNav: React.ForwardRefExoticComponent<CNavProps & React.RefAttributes<HTMLDivElement | HTMLUListElement | HTMLOListElement>>;
