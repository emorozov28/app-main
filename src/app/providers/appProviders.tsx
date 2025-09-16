import {IParentComponent} from '@/shared/types/types';
import {ThemeProvider} from '@/app/providers/themeProvider';
import {Suspense} from 'react';

export const AppProviders = ({children}: IParentComponent) => {
    return(
        <Suspense fallback={'loading...'}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </Suspense>
    )
}