import React, { ElementType, HTMLAttributes } from 'react';
export interface CNavbarBrandProps extends HTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     */
    component?: string | ElementType;
    /**
     * The href attribute specifies the URL of the page the link goes to. [docs]
     */
    href?: string;
}
export declare const CNavbarBrand: React.ForwardRefExoticComponent<CNavbarBrandProps & React.RefAttributes<HTMLAnchorElement | HTMLSpanElement>>;
