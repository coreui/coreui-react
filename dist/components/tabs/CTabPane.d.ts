import React, { HTMLAttributes } from 'react';
export interface CTabPaneProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Toggle the visibility of component. [docs]
     */
    visible?: boolean;
}
export declare const CTabPane: React.ForwardRefExoticComponent<CTabPaneProps & React.RefAttributes<HTMLDivElement>>;
