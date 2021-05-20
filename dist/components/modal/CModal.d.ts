import { FC, HTMLAttributes } from 'react';
export interface CModalProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Align the modal in the center or top of the screen. [docs]
     *
     * @default 'top'
     */
    alignment?: 'top' | 'center';
    /**
     * Apply a backdrop on body while modal is open. [docs]
     * @default true
     */
    backdrop?: boolean;
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * @ignore
     */
    duration?: number;
    /**
     * Set modal to covers the entire user viewport. [docs]
     */
    fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /**
     * Closes the modal when escape key is pressed. [docs]
     * @default true
     */
    keyboard?: boolean;
    /**
     * Method called before the dissmiss animation has started. [docs]
     */
    onDismiss?: () => void;
    /**
     * Generates modal using createPortal. [docs]
     */
    portal?: boolean;
    /**
     * Create a scrollable modal that allows scrolling the modal body. [docs]
     */
    scrollable?: boolean;
    /**
     * Size the component small, large, or extra large. [docs]
     */
    size?: 'sm' | 'lg' | 'xl';
    /**
     * Remove animation to create modal that simply appear rather than fade in to view. [docs]
     */
    transition?: boolean;
    /**
     * Toggle the visibility of modal component. [docs]
     */
    visible?: boolean;
}
export declare const CModal: FC<CModalProps>;
