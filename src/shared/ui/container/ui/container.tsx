import css from './container.module.scss';
import cn from 'classnames';
import {ReactNode} from 'react';

interface IContainerProps {
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
}

export const Container = (props: IContainerProps) => {
    const {children, className, fullWidth} = props;

    return (
        <div
            className={cn(css.container, className, {
                [css['-full']]: fullWidth,
            })}
        >
            {children}
        </div>
    );
};