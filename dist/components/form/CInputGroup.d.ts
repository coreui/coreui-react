import React, { HTMLAttributes } from 'react';
export interface CInputGroupProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Size the component small or large. [docs]
     *
     * @type 'sm' | 'lg'
     */
    size?: 'sm' | 'lg';
}
export declare const CInputGroup: React.ForwardRefExoticComponent<CInputGroupProps & React.RefAttributes<HTMLDivElement>>;
