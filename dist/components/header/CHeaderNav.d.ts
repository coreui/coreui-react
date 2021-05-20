import React, { ElementType, HTMLAttributes } from 'react';
export interface CHeaderNavProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'ul'
     */
    component?: string | ElementType;
}
export declare const CHeaderNav: React.ForwardRefExoticComponent<CHeaderNavProps & React.RefAttributes<HTMLDivElement | HTMLUListElement>>;
