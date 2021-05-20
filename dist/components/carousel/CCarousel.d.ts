import React, { HTMLAttributes } from 'react';
export interface CCarouselProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Set 'animate' variable for created context. [docs]
     *
     * @type boolean
     */
    animate?: boolean;
    /**
     * A string of all className you want applied to the base component. [docs]
     *
     * @type string
     */
    className?: string;
    /**
     * Adding in the previous and next controls. [docs]
     *
     * @type: boolean
     */
    controls?: boolean;
    /**
     * Add darker controls, indicators, and captions. [docs]
     *
     * @type boolean
     */
    dark?: boolean;
    /**
     * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle. [docs]
     *
     * @type boolean | number
     */
    interval?: boolean | number;
    /**
     * index of the active item. [docs]
     *
     * @type number
     */
    index?: number;
    /**
     * Adding indicators at the bottom of the carousel for each item. [docs]
     *
     * @type boolean
     */
    indicators?: boolean;
    /**
     * On slide change callback. [docs]
     *
     * @type (a:number|string|null)=>void
     */
    onSlideChange?: (a: number | string | null) => void;
    /**
     * On slide change callback. [docs]
     *
     * @type 'slide' | 'crossfade'
     * @default 'slide'
     */
    transition?: 'slide' | 'crossfade';
}
export interface ContextProps {
    itemsNumber: number;
    state: [number | null, number, string?];
    animating: boolean;
    animate?: boolean;
    setItemsNumber: (a: number) => void;
    setAnimating: (a: boolean) => void;
    setState: (a: [number | null, number, string?]) => void;
}
export declare const CCarouselContext: React.Context<ContextProps>;
export declare const CCarousel: React.ForwardRefExoticComponent<CCarouselProps & React.RefAttributes<HTMLDivElement>>;
