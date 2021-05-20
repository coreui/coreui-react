import React, { HTMLAttributes } from 'react';
import { Colors } from '../Types';
export interface CProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Use to animate the stripes right to left via CSS3 animations. [docs]
     *
     * @default false
     */
    animated?: boolean;
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     * @default 'primary'
     */
    color?: Colors;
    /**
     * The percent to progress the ProgressBar. [docs]
     *
     * @default 0
     */
    value?: number;
    /**
     * Set the progress bar variant to optional striped. [docs]
     *
     * @default 'undefined'
     */
    variant?: 'striped';
}
export declare const CProgressBar: React.ForwardRefExoticComponent<CProgressBarProps & React.RefAttributes<HTMLDivElement>>;
