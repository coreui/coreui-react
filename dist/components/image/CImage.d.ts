import React, { HTMLAttributes } from 'react';
export interface CImageProps extends HTMLAttributes<HTMLImageElement> {
    /**
     * Set the horizontal aligment.
     */
    align?: 'start' | 'center' | 'end';
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Make image responsive. [docs]
     */
    fluid?: boolean;
    /**
     * Make image rounded. [docs]
     */
    rounded?: boolean;
    /**
     * Give an image a rounded 1px border appearance. [docs]
     */
    thumbnail?: boolean;
}
export declare const CImage: React.ForwardRefExoticComponent<CImageProps & React.RefAttributes<HTMLImageElement>>;
