import React, { HTMLAttributes } from 'react';
export declare type BPObject = {
    cols?: 'auto' | number | string | null;
    gutter?: number | string | null;
    gutterX?: number | string | null;
    gutterY?: number | string | null;
};
export interface CRowProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * The number of columns/offset/order on extra small devices (<576px). [docs]
     *
     * @type {{ cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }}
     */
    xs?: BPObject;
    /**
     * The number of columns/offset/order on small devices (<768px). [docs]
     *
     * @type {{ cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }}
     */
    sm?: BPObject;
    /**
     * The number of columns/offset/order on medium devices (<992px). [docs]
     *
     * @type {{ cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }}
     */
    md?: BPObject;
    /**
     * The number of columns/offset/order on large devices (<1200px). [docs]
     *
     * @type {{ cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }}
     */
    lg?: BPObject;
    /**
     * The number of columns/offset/order on X-Large devices (<1400px). [docs]
     *
     * @type {{ cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }}
     */
    xl?: BPObject;
    /**
     * The number of columns/offset/order on XX-Large devices (≥1400px). [docs]
     *
     * @type {{ cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }}
     */
    xxl?: BPObject;
}
export declare const CRow: React.ForwardRefExoticComponent<CRowProps & React.RefAttributes<HTMLDivElement>>;
