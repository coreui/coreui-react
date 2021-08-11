import React, { ElementType } from 'react';
import { CLinkProps } from '../link/CLink';
export interface CNavLinkProps extends Omit<CLinkProps, 'idx'> {
    /**
     * Toggle the active state for the component. [docs]
     */
    active?: boolean;
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'a'
     */
    component?: string | ElementType;
    /**
     * Toggle the disabled state for the component. [docs]
     */
    disabled?: boolean;
    /**
     * @ignore
     */
    idx?: string;
    /**
     * @ignore
     */
    to?: string;
}
export declare const CNavLink: React.ForwardRefExoticComponent<CNavLinkProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLLIElement>>;
