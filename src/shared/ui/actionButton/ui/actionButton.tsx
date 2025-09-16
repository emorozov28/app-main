import css from './actionButton.module.scss';
import cn from 'classnames';
import {Link} from 'react-router';
import {ActionButtonType, IActionButtonProps, IAppLinkProps, IButtonProps, ILinkProps} from './type';

export const ActionButton = (props: IActionButtonProps) => {
    const {
        actionType = ActionButtonType.BUTTON,
        className,
        clear,
        square,
        fullWidth,
        children,
        ...rest // тільки нативні пропси (onClick, href, to і тд)
    } = props;

    const buttonClassName = cn(
        css['button'],
        {
            [css['-fullwidth']]: fullWidth,
            [css['-clear']]: clear,
            [css['-square']]: square,
        },
        className
    );

    if (actionType === ActionButtonType.LINK) {
        const { href, target, ...anchorProps } = rest as ILinkProps;
        return (
            <a
                href={href}
                target={target}
                rel='noopener noreferrer'
                className={buttonClassName}
                {...anchorProps}
            >
                {children}
            </a>
        );
    }

    if (actionType === ActionButtonType.APPLINK) {
        const { to, ...linkProps } = rest as IAppLinkProps;
        return (
            <Link to={to} className={buttonClassName} {...linkProps}>
                {children}
            </Link>
        );
    }

    const { buttonType = 'button', ...buttonProps } = rest as IButtonProps;
    return (
        <button className={buttonClassName} type={buttonType} {...buttonProps}>
            {children}
        </button>
    );
};
