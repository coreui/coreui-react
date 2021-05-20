import React, { HTMLAttributes } from 'react';
export interface CFooterProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Place footer in non-static positions. [docs]
     */
    position?: 'fixed' | 'sticky';
}
export declare const CFooter: React.ForwardRefExoticComponent<CFooterProps & React.RefAttributes<HTMLDivElement>>;
