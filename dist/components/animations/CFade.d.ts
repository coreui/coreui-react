import React from 'react';
import { Transition } from 'react-transition-group';
export interface CFadeProps {
    /**
     * Run the fade in animation when the component mounts, if it is initially
     * shown
     */
    appear?: boolean;
    children: any;
    /**
     * A string of all className you want applied to the base component. [docs]
     */
    className?: string;
    /**
     * Show the component; triggers the fade in or fade out animation
     */
    in?: boolean;
    /**
     * Wait until the first "enter" transition to mount the component (add it to the DOM)
     */
    mountOnEnter?: boolean;
    /**
     * Unmount the component (remove it from the DOM) when it is faded out
     */
    unmountOnExit?: boolean;
    /**
     * Callback fired before the component fades in
     */
    onEnter?(node: HTMLElement): any;
    /**
     * Callback fired after the component starts to fade in
     */
    onEntering?(node: HTMLElement): any;
    /**
     * Callback fired after the has component faded in
     */
    onEntered?(node: HTMLElement): any;
    /**
     * Callback fired before the component fades out
     */
    onExit?(node: HTMLElement): any;
    /**
     * Callback fired after the component starts to fade out
     */
    onExiting?(node: HTMLElement): any;
    /**
     * Callback fired after the component has faded out
     */
    onExited?(node: HTMLElement): any;
    /**
     * Duration of the fade animation in milliseconds, to ensure that finishing
     * callbacks are fired even if the original browser transition end events are
     * canceled
     */
    timeout?: number;
}
export declare const CFade: React.ForwardRefExoticComponent<CFadeProps & React.RefAttributes<Transition<any>>>;
