import React, { HTMLAttributes } from 'react';
export interface CModalBackdropProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
}
export declare const CModalBackdrop: React.ForwardRefExoticComponent<CModalBackdropProps & React.RefAttributes<HTMLDivElement>>;
