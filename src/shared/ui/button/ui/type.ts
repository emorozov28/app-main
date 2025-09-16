import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode,
    type?: 'button' | 'submit' | 'reset',
    className?: string,
    fullWidth?: boolean,
    clear?: boolean,
    square?: boolean,
}