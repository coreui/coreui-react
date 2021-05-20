import React, { ElementType, HTMLAttributes } from 'react';
export interface CInputGroupTextProps extends HTMLAttributes<HTMLLabelElement | HTMLSpanElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'span'
     */
    component?: string | ElementType;
}
export declare const CInputGroupText: React.ForwardRefExoticComponent<CInputGroupTextProps & React.RefAttributes<HTMLLabelElement | HTMLSpanElement>>;
