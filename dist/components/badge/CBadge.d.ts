import React, { ElementType, HTMLAttributes } from 'react';
import { Colors, Shapes, TextColors } from '../Types';
export interface CBadgeProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string}
     */
    color?: Colors;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'span'
     */
    component?: string | ElementType;
    /**
     * Select the shape of the component. [docs]
     *
     * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
     */
    shape?: Shapes;
    /**
     * Size the component small. [docs]
     *
     * @type 'sm'
     */
    size?: 'sm';
    /**
     * Sets the text color of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
     */
    textColor?: TextColors;
}
export declare const CBadge: React.ForwardRefExoticComponent<CBadgeProps & React.RefAttributes<HTMLDivElement | HTMLSpanElement>>;
