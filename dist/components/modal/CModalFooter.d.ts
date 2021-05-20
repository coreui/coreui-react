import { FC, HTMLAttributes } from 'react';
export interface CModalFooterProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
}
export declare const CModalFooter: FC<CModalFooterProps>;
