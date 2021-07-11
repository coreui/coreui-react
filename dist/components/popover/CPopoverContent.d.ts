import React, { CSSProperties } from 'react';
import { CPopoverProps } from './CPopover';
import { PopperChildrenProps } from 'react-popper';
interface CPopoverContentProps extends Omit<CPopoverProps, 'placement' | 'children' | 'trigger'>, Omit<PopperChildrenProps, 'placementPostfix' | 'style'> {
    transitionClass?: string;
    style?: CSSProperties;
    placementClassNamePostfix?: string;
}
export declare const CPopoverContent: React.ForwardRefExoticComponent<Pick<CPopoverContentProps, "placement" | "content" | "offset" | "title" | "visible" | "style" | "isReferenceHidden" | "hasPopperEscaped" | "update" | "forceUpdate" | "arrowProps" | "placementClassNamePostfix" | "transitionClass"> & React.RefAttributes<HTMLDivElement>>;
export {};
