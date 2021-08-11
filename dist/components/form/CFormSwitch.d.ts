import React, { HTMLAttributes, ReactNode } from 'react';
export interface CFormSwitchProps extends HTMLAttributes<HTMLInputElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * The id global attribute defines an identifier (ID) that must be unique in the whole document. [docs]
     */
    id?: string;
    /**
     * Set component validation state to invalid. [docs]
     */
    invalid?: boolean;
    /**
     * The element represents a caption for a component. [docs]
     */
    label?: string | ReactNode;
    /**
     * Size the component large or extra large. Works only with `switch` [docs]
     *
     * @type 'lg' | 'xl'
     */
    size?: 'lg' | 'xl';
    /**
     * Specifies the type of component. [docs]
     *
     * @type checkbox' | 'radio'
     * @default 'checkbox'
     */
    type?: 'checkbox' | 'radio';
    /**
     * Set component validation state to valid. [docs]
     */
    valid?: boolean;
}
export declare const CFormSwitch: React.ForwardRefExoticComponent<CFormSwitchProps & React.RefAttributes<HTMLInputElement>>;
