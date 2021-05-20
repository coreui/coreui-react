import React, { ElementType, HTMLAttributes } from 'react';
export interface CCardTextProps extends HTMLAttributes<HTMLParagraphElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'p'
     */
    component?: string | ElementType;
}
export declare const CCardText: React.ForwardRefExoticComponent<CCardTextProps & React.RefAttributes<HTMLParagraphElement>>;
