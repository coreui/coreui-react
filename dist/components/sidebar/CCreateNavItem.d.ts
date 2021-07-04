import { FC, ElementType } from 'react';
import { CNavLinkProps } from '../nav/CNavLink';
export interface CSidebarNavItemGeneratorProps {
    anchor: string;
    as: string | ElementType;
    _component: string;
    items?: CNavLinkProps[];
    idx?: string;
}
interface CCreateNavItemProps {
    idx?: string;
    items: CNavLinkProps[];
}
export declare const CCreateNavItem: FC<CCreateNavItemProps>;
export {};
