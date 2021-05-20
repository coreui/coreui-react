import { FC, HTMLAttributes } from 'react';
export interface CHeaderDividerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
}
export declare const CHeaderDivider: FC<CHeaderDividerProps>;
