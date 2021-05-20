import React, { HTMLAttributes } from 'react';
import { Colors } from '../Types';
export interface CToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * Auto hide the toast. [docs]
     *
     * @default true
     */
    autohide?: boolean;
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     *
     * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
     * @default 'primary'
     */
    color?: Colors;
    /**
     * Delay hiding the toast (ms). [docs]
     */
    delay?: number;
    /**
     * @ignore
     */
    key?: number;
    /**
     * Toggle the visibility of component. [docs]
     *
     * @default true
     */
    visible?: boolean;
    /**
     * Method called before the dissmiss animation has started. [docs]
     */
    onDismiss?: () => void;
}
interface ContextProps extends CToastProps {
    visible?: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}
export declare const CToastContext: React.Context<ContextProps>;
export declare const CToast: React.ForwardRefExoticComponent<CToastProps & React.RefAttributes<HTMLDivElement>>;
export {};
