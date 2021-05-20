/// <reference types="react" />
export default function ClientOnlyPortal({ children, selector }: {
    children: any;
    selector: any;
}): import("react").ReactPortal | null;
