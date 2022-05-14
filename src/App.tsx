import React from 'react';
import Header from './components/layout/Header';
import ActionButtons from './components/layout/ActionButtons';
import ProductList from './components/layout/ProductList';
import Footer from './components/layout/Footer';
import MarketProvider from './context/marketContext';

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
