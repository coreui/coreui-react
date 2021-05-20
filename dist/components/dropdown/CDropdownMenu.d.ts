import { ElementType, FC, HTMLAttributes } from 'react';
import { PopperChildrenProps } from 'react-popper';
export interface CDropdownMenuProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement>, Omit<PopperChildrenProps, 'arrowProps' | 'forceUpdate' | 'placement' | 'ref' | 'style' | 'update'> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'ul'
     */
    component?: string | ElementType;
}
export declare const CDropdownMenu: FC<CDropdownMenuProps>;
