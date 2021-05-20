import React, { HTMLAttributes } from 'react';
export interface CAccordionButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Set button state to collapsed. [docs]
     */
    collapsed?: boolean;
}
export declare const CAccordionButton: React.ForwardRefExoticComponent<CAccordionButtonProps & React.RefAttributes<HTMLButtonElement>>;
