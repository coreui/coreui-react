import React, { HTMLAttributes } from 'react';
export interface CCarouselIndicatorsProps extends HTMLAttributes<HTMLOListElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Indicators section user classes. [docs]
     */
    indicatorsClass?: string;
}
export declare const CCarouselIndicators: React.ForwardRefExoticComponent<CCarouselIndicatorsProps & React.RefAttributes<HTMLOListElement>>;
