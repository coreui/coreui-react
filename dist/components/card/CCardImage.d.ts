import React, { ElementType, HTMLAttributes } from 'react';
export interface CCardImageProps extends HTMLAttributes<HTMLImageElement | HTMLOrSVGElement | HTMLOrSVGImageElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'img'
     */
    component?: string | ElementType;
    /**
     * Optionally orientate the image to the top, bottom, or make it overlaid across the card. [docs]
     */
    orientation?: 'top' | 'bottom';
}
export declare const CCardImage: React.ForwardRefExoticComponent<CCardImageProps & React.RefAttributes<HTMLOrSVGElement | HTMLOrSVGImageElement>>;
