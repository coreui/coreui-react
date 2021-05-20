import React, { HTMLAttributes } from 'react';
export interface CNavTitleProps extends HTMLAttributes<HTMLLIElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
}
export declare const CNavTitle: React.ForwardRefExoticComponent<CNavTitleProps & React.RefAttributes<HTMLLIElement>>;
