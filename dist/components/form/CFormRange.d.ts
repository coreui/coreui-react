import React, { ChangeEventHandler, HTMLAttributes } from 'react';
export interface CFormRangeProps extends HTMLAttributes<HTMLInputElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Toggle the disabled state for the component. [docs]
     */
    disabled?: boolean;
    /**
     * Specifies the maximum value for the component. [docs]
     */
    max?: number;
    /**
     * Specifies the minimum value for the component. [docs]
     */
    min?: number;
    /**
     * Method called immediately after the `value` prop changes. [docs]
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Toggle the readonly state for the component. [docs]
     */
    readOnly?: boolean;
    /**
     * Specifies the interval between legal numbers in the component. [docs]
     */
    steps: number;
    /**
     * The `value` attribute of component. [docs]
     *
     * @controllable onChange
     * */
    value?: string | string[] | number;
}
export declare const CFormRange: React.ForwardRefExoticComponent<CFormRangeProps & React.RefAttributes<HTMLInputElement>>;
