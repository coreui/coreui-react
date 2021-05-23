import React, { ElementType, HTMLAttributes } from 'react';
export interface CModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'h5'
     */
    component?: string | ElementType;
}
export declare const CModalTitle: React.ForwardRefExoticComponent<CModalTitleProps & React.RefAttributes<HTMLHeadElement>>;
