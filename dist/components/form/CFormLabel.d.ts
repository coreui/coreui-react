import React, { HTMLAttributes } from 'react';
export interface CFormLabelProps extends HTMLAttributes<HTMLLabelElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * A string of all className you want to be applied to the component, and override standard className value. [docs]
     */
    customClassName?: string;
}
export declare const CFormLabel: React.ForwardRefExoticComponent<CFormLabelProps & React.RefAttributes<HTMLLabelElement>>;
