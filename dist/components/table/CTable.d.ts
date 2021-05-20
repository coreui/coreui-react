import React, { HTMLAttributes } from 'react';
import { Colors } from '../Types';
export interface CTableProps extends HTMLAttributes<HTMLTableElement> {
    /**
     * Set the vertical aligment. [docs]
     */
    align?: 'bottom' | 'middle' | 'top';
    /**
     * Sets the border color of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    borderColor?: Colors;
    /**
     * Add borders on all sides of the table and cells. [docs]
     */
    bordered?: boolean;
    /**
     * Remove borders on all sides of the table and cells. [docs]
     */
    borderless?: boolean;
    /**
     * Put the <caption> on the top of the table. [docs]
     */
    caption?: 'top';
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color?: Colors;
    /**
     * Enable a hover state on table rows within a `<CTableBody>`. [docs]
     */
    hover?: boolean;
    /**
     * Make any table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to. [docs]
     */
    responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /**
     * Make table more compact by cutting all cell `padding` in half. [docs]
     */
    small?: boolean;
    /**
     * Add zebra-striping to any table row within the `<CTableBody>`. [docs]
     */
    striped?: boolean;
}
export declare const CTable: React.ForwardRefExoticComponent<CTableProps & React.RefAttributes<HTMLTableElement>>;
