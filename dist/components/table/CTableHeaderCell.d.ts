import React, { HTMLAttributes } from 'react';
import { Colors } from '../Types';
export interface CTableHeaderCellProps extends HTMLAttributes<HTMLTableHeaderCellElement> {
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
export declare const CTableHeaderCell: React.ForwardRefExoticComponent<CTableHeaderCellProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
