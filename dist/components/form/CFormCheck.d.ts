import React, { HTMLAttributes, ReactNode } from 'react';
import { Colors, Shapes } from '../Types';
export interface CFormCheckProps extends HTMLAttributes<HTMLInputElement> {
    button?: boolean;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    buttonColor?: Colors;
    /**
     * Select the shape of the component. [docs]
     *
     * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
     */
    buttonShape?: Shapes;
    /**
     * Size the component small or large. [docs]
     *
     * @type 'sm' | 'lg'
     */
    buttonSize?: 'sm' | 'lg';
    /**
     * Set the button variant to an outlined button or a ghost button. [docs]
     */
    buttonVariant?: 'outline' | 'ghost';
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * The id global attribute defines an identifier (ID) that must be unique in the whole document. [docs]
     */
    id?: string;
    /**
     * Group checkboxes or radios on the same horizontal row by adding. [docs]
     */
    inline?: boolean;
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
     * Render component as a toggle switch. [docs]
     */
    switch?: boolean;
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
export declare const CFormCheck: React.ForwardRefExoticComponent<CFormCheckProps & React.RefAttributes<HTMLInputElement>>;
