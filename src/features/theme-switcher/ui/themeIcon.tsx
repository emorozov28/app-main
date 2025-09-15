import css from './themeSwitcher.module.scss';
import {ComponentType, FC, SVGProps} from 'react';

import SvgSun from '@/shared/assets/icons/theme/sun.svg?react';
// import SvgSunMoon from '@/shared/assets/icons/theme/sun-moon.svg?react';
import SvgMoon from '@/shared/assets/icons/theme/moon.svg?react';
import {Theme, ThemeName} from '@/features/theme-switcher/types/theme';

interface IThemeIconProps {
    theme: ThemeName,
    size: number | string,
}

const ICONS = {
    [Theme.LIGHT]: SvgSun,
    [Theme.DARK]: SvgMoon,
    // [Theme.DARK_BLUE]: SvgSunMoon,
} satisfies Record<ThemeName, ComponentType<SVGProps<SVGSVGElement>>>;

export const ThemeIcon: FC<IThemeIconProps> = ({ theme, size }) => {
    const Icon = ICONS[theme]

    return <Icon width={size} height={size} aria-hidden={true} className={css['icon']} />
};