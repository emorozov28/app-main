import css from './header.module.scss';
import cn from 'classnames';
import {ThemeSwitcher} from '@/features/theme-switcher';
import {Container} from '@/shared/ui/container';
import {Button} from '@/shared/ui/button';

import Logo from '@/shared/assets/icons/logo/logo.svg?react';
import User from '@/shared/assets/icons/user/user.svg?react';
import Cart from '@/shared/assets/icons/cart/shopping-cart.svg?react';

interface IHeaderProps {
    className: string;
    fixed?: boolean
}

export const Header = (props: IHeaderProps) => {
    const {fixed = false, className} = props;

    return (
        <header className={cn(css['header'], {
            [css['-fixed']]: fixed,
        }, className)}>
            <Container className={css['container']}>
                <Logo width={48} height={48} className={css['logo']} />
                <nav className={css['nav']}>
                    <Button clear={true} square={true} aria-label={'Login'}>
                        <User width={20} height={20} className={'svg-icon'} aria-hidden={true} />
                    </Button>
                    <Button clear={true} square={true} aria-label={'Shopping cart'}>
                        <Cart width={20} height={20} className={'svg-icon'} aria-hidden={true} />
                    </Button>
                </nav>
                <ThemeSwitcher />
            </Container>
        </header>
    );
};
