import React, { HTMLAttributes } from 'react';
import { Colors, Shapes } from '../Types';
export interface CAvatarProps extends HTMLAttributes<HTMLDivElement> {
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
     * Select the shape of the component. [docs]
     *
     * @type {'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string}
     */
    shape?: Shapes;
    /**
     * Size the component small, large, or extra large. [docs]
     */
    size?: string;
    /**
     * The src attribute for the img element. [docs]
     */
    src?: string;
    /**
     * Sets the color context of the status indicator to one of CoreUI’s themed colors. [docs]
     *
     * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string}
     */
    status?: Colors;
    /**
     * Sets the text color of the component to one of CoreUI’s themed colors. [docs]
     */
    textColor?: string;
}
export declare const CAvatar: React.ForwardRefExoticComponent<CAvatarProps & React.RefAttributes<HTMLDivElement>>;
