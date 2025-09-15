import css from './themeSwitcher.module.scss'
import {useAppDispatch, useAppSelector} from '@/app/hook';
import {getTheme} from '@/features/theme-switcher';
import {nextTheme} from '@/features/theme-switcher/model/slice';
import {ThemeIcon} from '@/features/theme-switcher/ui/themeIcon';

export const ThemeSwitcher = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(getTheme);

    const changeTheme = () => {
        dispatch(nextTheme());
    }

    return (
      <>
          <button type={'button'} onClick={changeTheme} className={css['switcher']} aria-label={'Toggle theme'}>
              <ThemeIcon theme={theme} size={16} />
          </button>
      </>
    );
};