import React, { Fragment } from 'react';
import Header from './components/layout/Header';
import ActionButtons from './components/layout/ActionButtons';
import ListBoxes from './components/layout/ListBoxes';
import Footer from './components/layout/Footer';
import LocalStorageState from './context/LocalStorageState';

const App = () => {
    return (
        <LocalStorageState>
            <Fragment>
                <Header />
                <ActionButtons />
                <ListBoxes />
                <Footer />
            </Fragment>
        </LocalStorageState>
    );
};

export default App;
