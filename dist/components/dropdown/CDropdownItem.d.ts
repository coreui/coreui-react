import React, { ElementType } from 'react';
import { CLinkProps } from '../link/CLink';
export interface CDropdownItemProps extends CLinkProps {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     *
     * @default 'a'
     */
    component?: string | ElementType;
}
export declare const CDropdownItem: React.ForwardRefExoticComponent<CDropdownItemProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
