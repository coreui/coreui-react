import React, { HTMLAttributes } from 'react';
export interface CAccordionProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container. [docs]
     */
    flush?: boolean;
}
export declare const CAccordion: React.ForwardRefExoticComponent<CAccordionProps & React.RefAttributes<HTMLDivElement>>;
