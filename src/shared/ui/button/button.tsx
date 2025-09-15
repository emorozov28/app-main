import css from './button.module.scss';
import cn from 'classnames';
import {ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode} from 'react';

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode,
    type?: 'button' | 'submit' | 'reset',
    className?: string,
    fullWidth?: boolean,
    clear?: boolean,
}

export const Button:FC<IButtonProps> = (props) => {
    const {children, type = 'button', className, fullWidth, clear, ...otherProps} = props;

    return (
        <button
            className={cn(
                css['button'],
                {
                    [css['-fullwidth']]: fullWidth,
                    [css['-clear']]: clear,
                },
                className
            )}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};