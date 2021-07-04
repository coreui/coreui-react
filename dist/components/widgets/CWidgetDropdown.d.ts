import React, { HTMLAttributes, ReactNode } from 'react';
import { Colors } from '../Types';
export interface CWidgetDropdownProps extends HTMLAttributes<HTMLDivElement> {
    action?: string | ReactNode;
    change?: string | ReactNode;
    chart?: string | ReactNode;
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
    title?: string;
    value?: string | number;
}
export declare const CWidgetDropdown: React.ForwardRefExoticComponent<CWidgetDropdownProps & React.RefAttributes<HTMLDivElement>>;
