import React, { HTMLAttributes } from 'react';
export interface CAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
}
export declare const CAccordionItem: React.ForwardRefExoticComponent<CAccordionItemProps & React.RefAttributes<HTMLDivElement>>;
