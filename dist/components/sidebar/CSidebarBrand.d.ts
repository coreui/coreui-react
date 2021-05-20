import React, { HTMLAttributes } from 'react';
export interface CSidebarBrandProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
}
export declare const CSidebarBrand: React.ForwardRefExoticComponent<CSidebarBrandProps & React.RefAttributes<HTMLDivElement>>;
