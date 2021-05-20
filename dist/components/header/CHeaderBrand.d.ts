import React, { ElementType, HTMLAttributes } from 'react';
export interface CHeaderBrandProps extends HTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'a'
     */
    component?: string | ElementType;
}
export declare const CHeaderBrand: React.ForwardRefExoticComponent<CHeaderBrandProps & React.RefAttributes<HTMLAnchorElement | HTMLSpanElement>>;
