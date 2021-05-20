import React, { HTMLAttributes } from 'react';
export interface CCollapseProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Toggle the visibility of component. [docs]
     */
    visible?: boolean;
}
export declare const CCollapse: React.ForwardRefExoticComponent<CCollapseProps & React.RefAttributes<HTMLDivElement>>;
