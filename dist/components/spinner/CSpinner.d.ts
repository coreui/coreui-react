import React, { ElementType, HTMLAttributes } from 'react';
import { Colors } from '../Types';
export interface CSpinnerProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string }
     */
    color?: Colors;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'div'
     */
    component?: string | ElementType;
    /**
     * Size the component small. [docs]
     */
    size?: 'sm';
    /**
     * Set the button variant to an outlined button or a ghost button. [docs]
     *
     * @default 'border'
     */
    variant?: 'border' | 'grow';
    /**
     * Set visually hidden label for accessibility purposes. [docs]
     *
     * @default 'Loading...'
     */
    visuallyHiddenLabel?: string;
}
export declare const CSpinner: React.ForwardRefExoticComponent<CSpinnerProps & React.RefAttributes<HTMLDivElement | HTMLSpanElement>>;
