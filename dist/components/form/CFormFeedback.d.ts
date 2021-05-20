import React, { ElementType, HTMLAttributes } from 'react';
export interface CFormFeedbackProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'div'
     */
    component?: string | ElementType;
    /**
     * Method called immediately after the `value` prop changes. [docs]
     */
    invalid?: boolean;
    /**
     * If your form layout allows it, you can display validation feedback in a styled tooltip. [docs]
     */
    tooltip?: boolean;
    /**
     * Set component validation state to valid. [docs]
     */
    valid?: boolean;
}
export declare const CFormFeedback: React.ForwardRefExoticComponent<CFormFeedbackProps & React.RefAttributes<HTMLDivElement | HTMLSpanElement>>;
