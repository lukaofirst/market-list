import Header from './components/layout/Header';
import ActionBtns from './components/layout/ActionBtns';
import ProductList from './components/layout/ProductList';
import MarketProvider from './context/marketContext';
import Footer from './components/layout/Footer';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        success: {
            main: '#27b150',
        },
        warning: {
            main: '#da930f',
        },
        error: {
            main: '#ce1654',
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <MarketProvider>
                <Header />
                <ActionBtns />
                <ProductList />
                <Footer />
            </MarketProvider>
        </ThemeProvider>
    );
};

export default App;
