import React, { AllHTMLAttributes, ElementType } from 'react';
export interface CLinkProps extends AllHTMLAttributes<HTMLElement> {
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
     * The href attribute specifies the URL of the page the link goes to. [docs]
     */
    href?: string;
}
export declare const CLink: React.ForwardRefExoticComponent<CLinkProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
