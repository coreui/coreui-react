import React, { ElementType, HTMLAttributes } from 'react';
export interface CFormTextProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'div'
     */
    component?: string | ElementType;
}
export declare const CFormText: React.ForwardRefExoticComponent<CFormTextProps & React.RefAttributes<HTMLDivElement | HTMLSpanElement>>;
