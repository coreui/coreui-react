import { FC, HTMLAttributes } from 'react';
export interface CModalBodyProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
}
export declare const CModalBody: FC<CModalBodyProps>;
