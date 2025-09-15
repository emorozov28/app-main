import {ReactNode} from 'react';

export interface IParentComponent {
    children: ReactNode;
    className?: string | null;
}

export interface ILayoutComponent {
    children: ReactNode;
}