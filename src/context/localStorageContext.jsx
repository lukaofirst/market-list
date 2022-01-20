import { useState, useEffect, createContext } from 'react';

export const LocalStorageContext = createContext({
    getItems: () => {},
    saveItems: () => {},
    addItems: () => {},
    deleteItems: () => {},
    hasItems: false,
    quantities: [],
    alert: false,
    alertToFinish: false,
});

const LocalStorageProvider = (props) => {
    const [hasItems, setHasItems] = useState(false);
    const [quantities, setQuantities] = useState([]);
    const [alert, setAlert] = useState(false);
    const [alertToFinish, setAlertToFinish] = useState(false);

    let items = [];

    useEffect(() => {
        let timeout;
        if (alert) {
            timeout = setTimeout(() => {
                setAlert(false);
            }, 3000);
        }

        if (alertToFinish) {
            timeout = setTimeout(() => {
                setAlertToFinish(false);
            }, 3000);
        }

        return () => clearTimeout(timeout);
    }, [alert, alertToFinish]);

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
        let boxesSingle = document.querySelectorAll('.list-box-single');
        let boxesSingleTaked = document.querySelectorAll(
            '.list-box-single.takedItem'
        );

        quantifierValues.forEach((quantifier) => {
            if (boxesSingle.length !== boxesSingleTaked.length) {
                setAlert(true);
            } else {
                saveItems(quantifier.value);
            }
        });
    };

    // Delete items from LocalStorage
    const deleteItems = () => {
        let quantifierSingle = document.querySelectorAll(
            '.list-quantifier-single'
        );
        let quantifierSingleTaked = document.querySelectorAll(
            '.list-quantifier-single.takedItem2'
        );

        if (quantifierSingle.length !== quantifierSingleTaked.length) {
            setAlertToFinish(true);
        } else {
            if (window.confirm('Você deseja apagar os dados salvos?')) {
                localStorage.clear();
                window.location.reload();
            }
        }
    };

    const contextValue = {
        addItems,
        saveItems,
        deleteItems,
        getItems,
        hasItems,
        quantities,
        alert,
        alertToFinish,
    };

    return (
        <LocalStorageContext.Provider value={contextValue}>
            {props.children}
        </LocalStorageContext.Provider>
    );
};

export default LocalStorageProvider;
