import {Header} from '@/widgets/header/';
import {Container} from '@/shared/ui/container';
import {Outlet} from 'react-router-dom';

const App = () => {

    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Outlet/>
                    <div>App</div>
                </Container>
            </main>
        </>
    )
};

export default App
