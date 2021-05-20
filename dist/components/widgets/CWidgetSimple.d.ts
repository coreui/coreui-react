import React, { HTMLAttributes } from 'react';
export interface CWidgetSimpleProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    title?: string;
    value?: string | number;
}
export declare const CWidgetSimple: React.ForwardRefExoticComponent<CWidgetSimpleProps & React.RefAttributes<HTMLDivElement>>;
