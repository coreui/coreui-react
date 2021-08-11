import React, { ReactNode } from 'react';
export interface CNavGroupProps {
    children?: ReactNode;
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Set group toggler label. [docs]
     */
    toggler?: string | ReactNode;
    /**
     * Show nav group items. [docs]
     */
    visible?: boolean;
    /**
     * @ignore
     */
    idx?: string;
}
export declare const CNavGroup: React.ForwardRefExoticComponent<CNavGroupProps & React.RefAttributes<HTMLLIElement>>;
