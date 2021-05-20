import React, { HTMLAttributes } from 'react';
export interface CFormLabelProps extends HTMLAttributes<HTMLLabelElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    classNameParent?: string;
}
export declare const CFormLabel: React.ForwardRefExoticComponent<CFormLabelProps & React.RefAttributes<HTMLLabelElement>>;
