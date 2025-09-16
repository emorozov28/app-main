import {Suspense} from 'react';

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>

        </Suspense>
    );
};