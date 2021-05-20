import React, { HTMLAttributes } from 'react';
import { Breakpoints } from '../Types';
export interface CSidebarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Make sidebar narrow. [docs]
     */
    narrow?: boolean;
    /**
     * Method called before the hide animation has started. [docs]
     */
    onHide?: () => void;
    /**
     * Method called before the show animation has started. [docs]
     */
    onShow?: () => void;
    /**
     * Set sidebar to narrow variant. [docs]
     */
    overlaid?: boolean;
    /**
     * Place sidebar in non-static positions. [docs]
     */
    position?: 'fixed' | 'sticky';
    /**
     * Make any sidebar self hiding across all viewports or pick a maximum breakpoint with which to have a self hiding up to. [docs]
     */
    selfHiding?: Breakpoints | boolean;
    /**
     * Show self hidden sidebar. [docs]
     */
    show?: boolean;
    /**
     * Expand narrowed sidebar on hover. [docs]
     */
    unfoldable?: boolean;
}
export declare const CSidebar: React.ForwardRefExoticComponent<CSidebarProps & React.RefAttributes<HTMLDivElement>>;
