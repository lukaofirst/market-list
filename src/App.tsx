import Header from './components/layout/Header';
import ActionButtons from './components/layout/ActionButtons';
import ProductList from './components/layout/ProductList';
import MarketProvider from './context/marketContext';
import Footer from './components/layout/Footer';

const App = () => {
    return (
        <MarketProvider>
            <Header />
            <ActionButtons />
            <ProductList />
            <Footer />
        </MarketProvider>
    );
};

export default App;
