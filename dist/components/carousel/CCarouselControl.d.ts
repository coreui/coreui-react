import React, { HTMLAttributes } from 'react';
declare type Direction = 'prev' | 'next';
export interface CCarouselControlProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     *  Direction. [docs]
     *
     * @type 'prev' | 'next'
     */
    direction: Direction;
}
export declare const CCarouselControl: React.ForwardRefExoticComponent<CCarouselControlProps & React.RefAttributes<HTMLButtonElement>>;
export {};
