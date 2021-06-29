import React, { ElementType } from 'react';
import { CCloseButtonProps } from '../close-button/CCloseButton';
export interface CToastCloseProps extends CCloseButtonProps {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     */
    component?: string | ElementType;
}
export declare const CToastClose: React.ForwardRefExoticComponent<CToastCloseProps & React.RefAttributes<HTMLButtonElement>>;
