import React, { ChangeEventHandler, HTMLAttributes } from 'react';
export interface CFormTextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Toggle the disabled state for the component. [docs]
     */
    disabled?: boolean;
    /**
     * Set component validation state to invalid. [docs]
     */
    invalid?: boolean;
    /**
     * Method called immediately after the `value` prop changes. [docs]
     */
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    /**
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly` [docs]
     */
    plainText?: boolean;
    /**
     * Toggle the readonly state for the component. [docs]
     */
    readOnly?: boolean;
    /**
     * Set component validation state to valid. [docs]
     */
    valid?: boolean;
    /**
     * The `value` attribute of component. [docs]
     *
     * @controllable onChange
     * */
    value?: string | string[] | number;
}
export declare const CFormTextarea: React.ForwardRefExoticComponent<CFormTextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
