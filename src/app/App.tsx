import { useTheme } from './providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/route';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
export default App;
