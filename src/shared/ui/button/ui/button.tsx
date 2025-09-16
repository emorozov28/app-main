import css from './button.module.scss';
import cn from 'classnames';
import { FC} from 'react';
import {IButtonProps} from './type';

export const Button:FC<IButtonProps> = (props) => {
    const {children, type = 'button', className, fullWidth, clear, square, ...otherProps} = props;

    return (
        <button
            className={cn(
                css['button'],
                {
                    [css['-fullwidth']]: fullWidth,
                    [css['-clear']]: clear,
                    [css['-square']]: square,
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