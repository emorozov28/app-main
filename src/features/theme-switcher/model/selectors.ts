import {RootState} from '@/app/store';

export const getTheme = (state: RootState)=> state.theme.theme;