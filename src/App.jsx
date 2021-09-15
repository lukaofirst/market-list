import React, { Fragment } from 'react';
import Header from './components/layout/Header';
import ActionButtons from './components/layout/ActionButtons';
import ListBoxes from './components/layout/ListBoxes';
import LocalStorageState from './context/LocalStorageState';

const App = () => {
    return (
        <LocalStorageState>
            <Fragment>
                <Header />
                <ActionButtons />
                <ListBoxes />
            </Fragment>
        </LocalStorageState>
    );
};

export default App;
