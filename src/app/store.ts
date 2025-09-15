import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '@/features/theme-switcher';

const store = configureStore({
    reducer: {
        theme: themeReducer
    },
    // middleware: (getDefaultMiddleware) =>

});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
