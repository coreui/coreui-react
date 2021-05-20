import React, { HTMLAttributes } from 'react';
export interface CPaginationProps extends HTMLAttributes<HTMLUListElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Size the component small or large. [docs]
     */
    size?: 'sm' | 'lg';
}
export declare const CPagination: React.ForwardRefExoticComponent<CPaginationProps & React.RefAttributes<HTMLUListElement>>;
