import React, { HTMLAttributes } from 'react';
export interface CSidebarNavProps extends HTMLAttributes<HTMLUListElement> {
    /**
     * A string of all className you want applied to the component. [docs]
     */
    className?: string;
}
interface ContextProps {
    visibleGroup: string;
    setVisibleGroup: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export declare const CNavContext: React.Context<ContextProps>;
export declare const CSidebarNav: React.ForwardRefExoticComponent<CSidebarNavProps & React.RefAttributes<HTMLUListElement>>;
export {};
