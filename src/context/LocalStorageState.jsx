import React, { useState } from 'react';
import LocalStorageContext from './localStorageContext';

const LocalStorageState = (props) => {
    const [hasItems, setHasItems] = useState(false);
    const [quantities, setQuantities] = useState([]);

    let items = [];

    // Get items from LocalStorage
    const getItems = () => {
        if (localStorage.getItem('buyListQuantifiers') === null) {
            items = [];
            setHasItems(false);
        } else {
            // eslint-disable-next-line
            items = JSON.parse(localStorage.getItem('buyListQuantifiers'));
            setHasItems(true);

            setQuantities(items);
        }
    };

    // Save items on LocalStorage
    const saveItems = (item) => {
        if (localStorage.getItem('buyListQuantifiers') === null) {
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem('buyListQuantifiers'));
        }

        items.push(item);

        localStorage.setItem('buyListQuantifiers', JSON.stringify(items));

        window.location.reload();
    };

    // Add items on LocalStorage
    const addItems = () => {
        let quantifierValues = document.querySelectorAll('#quantifier');

        quantifierValues.forEach((quantifier) => {
            saveItems(quantifier.value);
        });
    };

    // Delete items from LocalStorage
    const deleteItems = () => {
        if (window.confirm('Você deseja apagar os dados salvos?')) {
            localStorage.clear();
            window.location.reload();
        }
    };

    return (
        <LocalStorageContext.Provider
            value={{
                addItems,
                saveItems,
                deleteItems,
                getItems,
                hasItems,
                quantities,
            }}
        >
            {props.children}
        </LocalStorageContext.Provider>
    );
};

export default LocalStorageState;
