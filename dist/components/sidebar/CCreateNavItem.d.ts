import { FC, ElementType } from 'react';
export interface CSidebarNavItemGeneratorProps {
    anchor: string;
    as: string | ElementType;
    _component: string;
    items?: Array<object>;
    idx?: string;
}
interface CCreateNavItemProps {
    idx?: string;
    items: Array<object>;
}
export declare const CCreateNavItem: FC<CCreateNavItemProps>;
export {};
