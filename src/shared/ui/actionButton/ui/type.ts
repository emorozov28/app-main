import {AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export const enum ActionButtonType {
    BUTTON = 'button',
    LINK = 'link',
    APPLINK =  'appLink'
};

export interface IBaseProps {
    className?: string;
    fullWidth?: boolean;
    clear?: boolean;
    square?: boolean;
}

export interface IButtonProps
    extends IBaseProps, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    buttonType?: 'button' | 'submit' | 'reset';
    actionType: ActionButtonType.BUTTON;
}

export interface ILinkProps
    extends IBaseProps, DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    href: string;
    actionType: ActionButtonType.LINK;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface IAppLinkProps extends IBaseProps {
    to: string;
    children: ReactNode;
    actionType: ActionButtonType.APPLINK;
}

export type IActionButtonProps = IButtonProps | ILinkProps | IAppLinkProps;

