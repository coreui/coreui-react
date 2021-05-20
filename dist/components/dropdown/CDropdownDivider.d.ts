import { FC, HTMLAttributes } from 'react';
export interface CDropdownDividerProps extends HTMLAttributes<HTMLHRElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
}
export declare const CDropdownDivider: FC<CDropdownDividerProps>;
