import React, { HTMLAttributes, ReactNode } from 'react';
import { Colors } from '../Types';
export interface CWidgetIconProps extends HTMLAttributes<HTMLDivElement> {
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
    footer?: string | ReactNode;
    icon?: string | ReactNode;
    iconPadding?: number;
    padding?: number;
    title?: string;
    value?: string | number;
}
export declare const CWidgetIcon: React.ForwardRefExoticComponent<CWidgetIconProps & React.RefAttributes<HTMLDivElement>>;
