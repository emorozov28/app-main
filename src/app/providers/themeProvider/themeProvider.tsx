import {useAppSelector} from '@/app/hook';
import {getTheme} from '@/features/theme-switcher';
import {FC, useEffect} from 'react';
import {ILayoutComponent} from '@/shared/types/types';

export const ThemeProvider:FC<ILayoutComponent> = ({children}) => {
    const theme = useAppSelector(getTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return <>{children}</>;
};