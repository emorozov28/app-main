import {RouteObject} from 'react-router-dom';

import {MainPage} from '@/pages/mainPage';
import {AboutPage} from '@/pages/aboutPage';
import {LoginPage} from '@/pages/loginPage';
import App from '@/app/App';

export const enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    LOGIN = 'login',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: 'about',
    [AppRoutes.LOGIN]: 'login',
}

export const RouteConfig: RouteObject[] = [
    {
        path: '/',
        element: <App/>, // Header + <Outlet/>
        children: [
            {index: true, element: <MainPage/>},
            {path: RoutePath.about, element: <AboutPage/>},
            {path: RoutePath.login, element: <LoginPage/>},
        ],
    },
];