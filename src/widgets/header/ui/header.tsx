import css from './header.module.scss';
import cn from 'classnames';
import {Link} from 'react-router';
import {ThemeSwitcher} from '@/features/theme-switcher';
import {Container} from '@/shared/ui/container';

import Logo from '@/shared/assets/icons/logo/logo.svg?react';
import User from '@/shared/assets/icons/user/user.svg?react';
import Cart from '@/shared/assets/icons/cart/shopping-cart.svg?react';
import {ActionButton, ActionButtonType} from '@/shared/ui/actionButton';

interface IHeaderProps {
    className?: string;
    fixed?: boolean
}

export const Header = (props: IHeaderProps) => {
    const {fixed = false, className} = props;

    return (
        <header className={cn(css['header'], {
            [css['-fixed']]: fixed,
        }, className)}>
            <Container className={css['container']}>
                <Link to={'/'}>
                    <Logo width={48} height={48} className={css['logo']} />
                </Link>
                <div className={css['wrap']}>
                    <nav className={css['nav']}>
                        <ActionButton actionType={ActionButtonType.APPLINK} to={'/login'} clear={true} square={true} aria-label={'Login'}>
                            <User width={20} height={20} className={'svg-icon'} aria-hidden={true} />
                        </ActionButton>
                        <ActionButton actionType={ActionButtonType.BUTTON} clear={true} square={true} aria-label={'Shopping cart'}>
                            <Cart width={20} height={20} className={'svg-icon'} aria-hidden={true} />
                        </ActionButton>
                    </nav>
                    <ThemeSwitcher />
                </div>
            </Container>
        </header>
    );
};
