import App from './App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/themeProvider';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)