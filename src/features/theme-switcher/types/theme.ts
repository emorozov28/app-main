export const Theme = {
    LIGHT: 'light',
    DARK: 'dark',
    // DARK_BLUE: 'dark-blue',
} as const;

export type ThemeName = (typeof Theme)[keyof typeof Theme] // 'light' | 'dark' | 'dark-blue'

export interface IThemeState {
    theme: ThemeName;
}

export const THEME_STORAGE_KEY = 'theme' as const;
export const THEMES: ThemeName[] = Object.values(Theme);