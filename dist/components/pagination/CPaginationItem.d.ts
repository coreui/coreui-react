import React, { ElementType, HTMLAttributes } from 'react';
export interface CPaginationItemProps extends HTMLAttributes<HTMLAnchorElement> {
    /**
     * Toggle the active state for the component. [docs]
     */
    active?: boolean;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     */
    component?: string | ElementType;
    /**
     * Toggle the disabled state for the component. [docs]
     */
    disabled?: boolean;
}
export declare const CPaginationItem: React.ForwardRefExoticComponent<CPaginationItemProps & React.RefAttributes<HTMLAnchorElement>>;
