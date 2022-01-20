import React from 'react';
import Header from './components/layout/Header';
import ActionButtons from './components/layout/ActionButtons';
import ListBoxes from './components/layout/ListBoxes';
import Footer from './components/layout/Footer';
import LocalStorageProvider from './context/localStorageContext';

const App = () => {
    return (
        <LocalStorageProvider>
            <Header />
            <ActionButtons />
            <ListBoxes />
            <Footer />
        </LocalStorageProvider>
    );
};

export default App;
