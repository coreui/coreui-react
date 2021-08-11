import React, { HTMLAttributes } from 'react';
export interface COffcanvasProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Apply a backdrop on body while offcanvas is open. [docs]
     *
     * @default true
     */
    backdrop?: boolean;
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Closes the offcanvas when escape key is pressed [docs]
     *
     * @default true
     */
    keyboard?: boolean;
    /**
     * Method called before the dissmiss animation has started. [docs]
     */
    onDismiss?: () => void;
    /**
     * Components placement, there’s no default placement. [docs]
     * @type 'start' | 'end' | 'top' | 'bottom'
     */
    placement: 'start' | 'end' | 'top' | 'bottom';
    /**
     * Generates modal using createPortal. [docs]
     */
    portal?: boolean;
    /**
     * Toggle the visibility of offcanvas component. [docs]
     */
    visible?: boolean;
}
export declare const COffcanvas: React.ForwardRefExoticComponent<COffcanvasProps & React.RefAttributes<HTMLDivElement>>;
