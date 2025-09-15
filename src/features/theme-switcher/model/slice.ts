import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IThemeState, ThemeName, Theme, THEME_STORAGE_KEY, THEMES} from '@/features/theme-switcher/types/theme';

const initialState: IThemeState = {
    theme: (localStorage.getItem(THEME_STORAGE_KEY) as ThemeName) || Theme.DARK
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeName>) => {
            state.theme = action.payload;
            localStorage.setItem(THEME_STORAGE_KEY, state.theme);
        },
        nextTheme: (state) => {
            const allThemes: ThemeName[] = THEMES;
            const currentIndex = allThemes.indexOf(state.theme)
            const nextIndex = (currentIndex + 1) % allThemes.length
            state.theme = allThemes[nextIndex]
            localStorage.setItem(THEME_STORAGE_KEY, state.theme)
        },
    }
});


export const { setTheme, nextTheme } = themeSlice.actions;
export default themeSlice.reducer;