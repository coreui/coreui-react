import React, { CSSProperties } from 'react';
import { CTooltipProps } from './CTooltip';
import { PopperChildrenProps } from 'react-popper';
interface CTooltipContentProps extends Omit<CTooltipProps, 'placement' | 'children' | 'trigger'>, Omit<PopperChildrenProps, 'placementPostfix' | 'style'> {
    transitionClass?: string;
    style?: CSSProperties;
    placementClassNamePostfix?: string;
}
export declare const CTooltipContent: React.ForwardRefExoticComponent<Pick<CTooltipContentProps, "placement" | "content" | "visible" | "style" | "isReferenceHidden" | "hasPopperEscaped" | "update" | "forceUpdate" | "arrowProps" | "placementClassNamePostfix" | "transitionClass"> & React.RefAttributes<HTMLDivElement>>;
export {};
