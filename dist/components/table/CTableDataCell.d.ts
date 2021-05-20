import React, { HTMLAttributes } from 'react';
import { Colors } from '../Types';
export interface CTableDataCellProps extends HTMLAttributes<HTMLTableDataCellElement> {
    /**
     * Highlight a table row or cell. [docs]
     */
    active?: boolean;
    /**
     * Set the vertical aligment. [docs]
     */
    align?: 'bottom' | 'middle' | 'top';
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
}
export declare const CTableDataCell: React.ForwardRefExoticComponent<CTableDataCellProps & React.RefAttributes<HTMLTableDataCellElement>>;
