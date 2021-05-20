import React, { HTMLAttributes } from 'react';
export interface CCarouselItemProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * @ignore
     */
    idx?: number;
}
export declare const CCarouselItem: React.ForwardRefExoticComponent<CCarouselItemProps & React.RefAttributes<HTMLDivElement>>;
