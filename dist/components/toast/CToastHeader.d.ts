import React, { HTMLAttributes } from 'react';
export interface CToastHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Automatically add a close button to the header.
     */
    close?: boolean;
}
export declare const CToastHeader: React.ForwardRefExoticComponent<CToastHeaderProps & React.RefAttributes<HTMLDivElement>>;
