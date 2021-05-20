import React, { HTMLAttributes } from 'react';
export interface CBackdropProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Toggle the visibility of modal component. [docs]
     */
    visible?: boolean;
}
export declare const CBackdrop: React.ForwardRefExoticComponent<CBackdropProps & React.RefAttributes<HTMLDivElement>>;
