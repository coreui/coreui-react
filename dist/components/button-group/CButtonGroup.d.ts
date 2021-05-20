import React, { HTMLAttributes } from 'react';
export interface CButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Size the component small or large. [docs]
     *
     * @type {'sm' | 'lg'}
     */
    size?: 'sm' | 'lg';
    /**
     * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here. [docs]
     */
    vertical?: boolean;
}
export declare const CButtonGroup: React.ForwardRefExoticComponent<CButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
