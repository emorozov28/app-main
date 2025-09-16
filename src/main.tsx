import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import store from '@/app/store';
import {AppProviders} from '@/app/providers/appProviders';
import {RouteConfig} from '@/shared/config/routerConfig/routeConfig';

import '@/app/styles/index.scss';

const router = createBrowserRouter(RouteConfig);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <AppProviders>
                <RouterProvider router={router}/>
            </AppProviders>
        </Provider>
    </StrictMode>,
);
