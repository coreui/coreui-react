import React, { HTMLAttributes } from 'react';
import { CProgressBarProps } from './CProgressBar';
export interface CProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, CProgressBarProps {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Sets the height of the component. If you set that value the inner <CProgressBar> will automatically resize accordingly. [docs]
     *
     * @default 'undefined'
     */
    height?: number;
    /**
     * Makes progress bar thinner. [docs]
     */
    thin?: boolean;
    /**
     * The percent to progress the ProgressBar (out of 100). [docs]
     * @default 0
     */
    value?: number;
    /**
     * Change the default color to white. [docs]
     */
    white?: boolean;
}
export declare const CProgress: React.ForwardRefExoticComponent<CProgressProps & React.RefAttributes<HTMLDivElement>>;
