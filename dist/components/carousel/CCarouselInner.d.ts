import React, { HTMLAttributes } from 'react';
export interface CCarouselInnerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
}
export declare const CCarouselInner: React.ForwardRefExoticComponent<CCarouselInnerProps & React.RefAttributes<HTMLDivElement>>;
