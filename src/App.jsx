import React, { Fragment } from 'react';
import Header from './components/layout/Header';
import ActionButtons from './components/layout/ActionButtons';
import ListBoxes from './components/layout/ListBoxes';

const App = () => {
    return (
        <Fragment>
            <Header />
            <ActionButtons />
            <ListBoxes />
        </Fragment>
    );
};

export default App;
