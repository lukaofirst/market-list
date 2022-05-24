import Header from './components/layout/Header';
import ActionBtns from './components/layout/ActionBtns';
import ProductList from './components/layout/ProductList';
import MarketProvider from './context/marketContext';
import Footer from './components/layout/Footer';

const App = () => {
    return (
        <MarketProvider>
            <Header />
            <ActionBtns />
            <ProductList />
            <Footer />
        </MarketProvider>
    );
};

export default App;
