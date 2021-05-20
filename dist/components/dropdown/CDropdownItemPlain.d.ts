import React, { ElementType, HTMLAttributes } from 'react';
export interface CDropdownItemPlainProps extends HTMLAttributes<HTMLSpanElement> {
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
export declare const CDropdownItemPlain: React.ForwardRefExoticComponent<CDropdownItemPlainProps & React.RefAttributes<HTMLSpanElement>>;
