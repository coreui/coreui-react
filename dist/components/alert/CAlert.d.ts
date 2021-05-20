import React, { HTMLAttributes } from 'react';
import { Colors } from '../Types';
export interface CAlertProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string }
     * @default 'primary'
     */
    color: Colors;
    /**
     * Optionally add a close button to alert and allow it to self dismiss. [docs]
     */
    dismissible?: boolean;
    /**
     * Method called before the dissmiss animation has started. [docs]
     */
    onDismiss?: () => void;
    /**
     * Method called after the dissmiss animation has completed and the component is removed from the dom. [docs]
     */
    onDismissed?: () => void;
    /**
     * Set the alert variant to a solid. [docs]
     */
    variant?: 'solid' | string;
    /**
     * Toggle the visibility of component. [docs]
     *
     * @default true
     */
    visible?: boolean;
}
export declare const CAlert: React.ForwardRefExoticComponent<CAlertProps & React.RefAttributes<HTMLDivElement>>;
