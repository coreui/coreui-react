import React, { HTMLAttributes, ReactNode } from 'react';
import { Colors } from '../Types';
export interface CWidgetProgressIconProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color?: Colors;
    icon?: string | ReactNode;
    /**
     * Sets the color context of the progress bar to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    progressColor?: Colors;
    progressValue?: number;
    progressWhite?: boolean;
    title?: string;
    /**
     * Sets the text color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
     */
    textColor?: string;
    value?: string | number;
}
export declare const CWidgetProgressIcon: React.ForwardRefExoticComponent<CWidgetProgressIconProps & React.RefAttributes<HTMLDivElement>>;
