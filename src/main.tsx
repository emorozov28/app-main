import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import '@/app/styles/index.scss'
import App from '@/app/App';
import {Provider} from 'react-redux';
import store from '@/app/store';
import {AppProviders} from '@/app/providers/appProviders';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <AppProviders>
                <App />
            </AppProviders>
        </Provider>
    </StrictMode>,
)
