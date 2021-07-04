import React, { HTMLAttributes, ReactNode } from 'react';
import { Colors } from '../Types';
declare type Values = number[] | string[];
export interface CWidgetBrandProps extends HTMLAttributes<HTMLDivElement> {
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
    headerChildren?: string | ReactNode;
    values?: Values | Values[];
}
export declare const CWidgetBrand: React.ForwardRefExoticComponent<CWidgetBrandProps & React.RefAttributes<HTMLDivElement>>;
export {};
