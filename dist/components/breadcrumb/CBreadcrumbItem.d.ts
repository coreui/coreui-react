import React, { HTMLAttributes } from 'react';
export interface CBreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
    /**
     * Toggle the active state for the component. [docs]
     */
    active?: boolean;
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * The `href` attribute for the inner `<CLink>` component. [docs]
     */
    href?: string;
}
export declare const CBreadcrumbItem: React.ForwardRefExoticComponent<CBreadcrumbItemProps & React.RefAttributes<HTMLLIElement>>;
