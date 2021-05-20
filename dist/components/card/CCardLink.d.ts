import React, { AnchorHTMLAttributes } from 'react';
export interface CCardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * The href attribute specifies the URL of the page the link goes to. [docs]
     */
    href?: string;
}
export declare const CCardLink: React.ForwardRefExoticComponent<CCardLinkProps & React.RefAttributes<HTMLAnchorElement>>;
