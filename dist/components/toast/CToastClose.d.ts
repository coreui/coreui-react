import React, { ElementType } from 'react';
import { CButtonCloseProps } from '../button/CButtonClose';
export interface CToastCloseProps extends CButtonCloseProps {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component. [docs]
     */
    component?: string | ElementType;
}
export declare const CToastClose: React.ForwardRefExoticComponent<CToastCloseProps & React.RefAttributes<HTMLButtonElement>>;
