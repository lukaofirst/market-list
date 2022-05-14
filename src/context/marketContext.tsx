import { useState, useEffect, createContext } from 'react';
import Product from './models/Product';
import productsData from '../productsData/productsData';
import ProductQuantity from './models/ProductQuantity';

interface IMarketContext {
    getProductsFromLS: () => void;
    addProductToBasket: (item: ProductQuantity) => void;
    hasItems: boolean;
    products: Product[];
    alert: boolean;
    warnAlert: boolean;
}

export const MarketContext = createContext<IMarketContext>({
    getProductsFromLS: () => {},
    // saveItems: (item: Product) => {},
    // addItems: () => {},
    // deleteItems: () => {},
    addProductToBasket: () => {},
    hasItems: false,
    products: [],
    alert: false,
    warnAlert: false,
});

interface IMarketProvider {
    children: JSX.Element[];
}

const MarketProvider = (props: IMarketProvider) => {
    const [hasItems, setHasItems] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [productsQuantity, setProductsQuantity] = useState<ProductQuantity[]>(
        []
    );
    const [alert, setAlert] = useState<boolean>(false);
    const [warnAlert, setWarnAlert] = useState<boolean>(false);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (alert) {
            timeout = setTimeout(() => {
                setAlert(false);
            }, 3000);
        }

        if (warnAlert) {
            timeout = setTimeout(() => {
                setWarnAlert(false);
            }, 3000);
        }

        return () => clearTimeout(timeout);
    }, [alert, warnAlert]);

    // Get items from LocalStorage
    const getProductsFromLS = () => {
        const buyList = localStorage.getItem('BuyList');
        if (buyList === null) {
            setProducts([]);
            setHasItems(false);
        } else {
            setHasItems(true);
            setProducts(JSON.parse(`${buyList}`));
        }
    };

    const addProductToBasket = (arr: ProductQuantity) => {
        setProductsQuantity((prevState) => {
            const prodItemExist = prevState.find(
                (item) => item.name === arr.name
            );

            if (!prodItemExist) return [...prevState, arr];
            else return prevState.filter((item) => item.name !== arr.name);
        });
    };

    // // Save items on LocalStorage
    // const saveItems = (item: Product) => {
    //     if (localStorage.getItem('BuyList') === null) {
    //         items = [];
    //     } else {
    //         items = JSON.parse(localStorage.getItem('BuyList'));
    //     }

    //     items.push(item);

    //     localStorage.setItem('BuyList', JSON.stringify(items));

    //     window.location.reload();
    // };

    // // Add items on LocalStorage
    // const addItems = () => {
    //     let quantifierValues = document.querySelectorAll('#quantifier');
    //     let boxesSingle = document.querySelectorAll('.product-item');
    //     let boxesSingleTaked = document.querySelectorAll(
    //         '.product-item.takedItem'
    //     );

    //     quantifierValues.forEach((quantifier: any) => {
    //         if (boxesSingle.length !== boxesSingleTaked.length) {
    //             setAlert(true);
    //         } else {
    //             saveItems(quantifier.value);
    //         }
    //     });
    // };

    // // Delete items from LocalStorage
    // const deleteItems = () => {
    //     let quantifierSingle = document.querySelectorAll(
    //         '.list-quantifier-single'
    //     );
    //     let quantifierSingleTaked = document.querySelectorAll(
    //         '.list-quantifier-single.takedItem2'
    //     );

    //     if (quantifierSingle.length !== quantifierSingleTaked.length) {
    //         setWarnAlert(true);
    //     } else {
    //         if (window.confirm('Você deseja apagar os dados salvos?')) {
    //             localStorage.clear();
    //             window.location.reload();
    //         }
    //     }
    // };

    const contextValue = {
        //addItems,
        //saveItems,
        //deleteItems,
        getProductsFromLS,
        addProductToBasket,
        hasItems,
        products,
        alert,
        warnAlert,
    };

    return (
        <MarketContext.Provider value={contextValue}>
            {props.children}
        </MarketContext.Provider>
    );
};

export default MarketProvider;
