import React, { HTMLAttributes, ReactNode } from 'react';
import { Colors, Shapes } from '../Types';
export declare type ButtonObject = {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     */
    color?: Colors;
    /**
     * Select the shape of the component. [docs]
     *
     * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
     */
    shape?: Shapes;
    /**
     * Size the component small or large. [docs]
     *
     * @type 'sm' | 'lg'
     */
    size?: 'sm' | 'lg';
    /**
     * Set the button variant to an outlined button or a ghost button. [docs]
     */
    variant?: 'outline' | 'ghost';
};
export interface CFormCheckProps extends HTMLAttributes<HTMLInputElement> {
    /**
     * Create button-like checkboxes and radio buttons. [docs]
     */
    button?: ButtonObject;
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
