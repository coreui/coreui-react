import React, { HTMLAttributes } from 'react';
export interface CNavGroupItemsProps extends HTMLAttributes<HTMLUListElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
}
export declare const CNavGroupItems: React.ForwardRefExoticComponent<CNavGroupItemsProps & React.RefAttributes<HTMLUListElement>>;
