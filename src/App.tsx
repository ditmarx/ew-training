import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Routes from './routes';
import theme from './theme';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
