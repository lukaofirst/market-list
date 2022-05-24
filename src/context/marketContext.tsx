import { useState, useEffect, createContext } from 'react';
import Product from './models/Product';
import productsData from '../productsData/productsData';
import ProductQuantity from './models/ProductQuantity';

interface IMarketContext {
    getProductsFromLS: () => void;
    addProductToBasket: (item: ProductQuantity) => void;
    saveBasketOnLS: () => void;
    deleteBasketFromLS: () => void;
    hasItems: boolean;
    products: Product[];
    productsFromLS: ProductQuantity[];
    alert: boolean;
    basket: ProductQuantity[];
}

export const MarketContext = createContext<IMarketContext>({
    getProductsFromLS: () => {},
    addProductToBasket: () => {},
    saveBasketOnLS: () => {},
    deleteBasketFromLS: () => {},
    hasItems: false,
    products: [],
    productsFromLS: [],
    alert: false,
    basket: [],
});

interface IMarketProvider {
    children: JSX.Element[];
}

const MarketProvider = (props: IMarketProvider) => {
    const [hasItems, setHasItems] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [productsFromLS, setProductsFromLS] = useState<ProductQuantity[]>([]);
    const [basket, setBasket] = useState<ProductQuantity[]>([]);
    const [alert, setAlert] = useState<boolean>(false);

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

        return () => clearTimeout(timeout);
    }, [alert]);

    // Get products from LocalStorage
    const getProductsFromLS = () => {
        const buyList = localStorage.getItem('BuyList');
        if (buyList === null) {
            setProductsFromLS([]);
            setHasItems(false);
        } else {
            setHasItems(true);
            setProductsFromLS(JSON.parse(buyList));
        }
    };

    // Add product to basket
    const addProductToBasket = (arr: ProductQuantity) => {
        setBasket((prevState) => {
            const prodItemExist = prevState.find(
                (item) => item.name === arr.name
            );

            if (!prodItemExist) return [...prevState, arr];
            else return prevState.filter((item) => item.name !== arr.name);
        });
    };

    // Save basket on localStorage
    const saveBasketOnLS = () => {
        if (basket.length !== 0) {
            localStorage.setItem('BuyList', JSON.stringify(basket));
            window.location.reload();
        } else {
            setAlert(true);
        }
    };

    // Delete basket from localStorage
    const deleteBasketFromLS = () => {
        localStorage.clear();
        window.location.reload();
    };

    const contextValue = {
        getProductsFromLS,
        addProductToBasket,
        saveBasketOnLS,
        deleteBasketFromLS,
        hasItems,
        products,
        productsFromLS,
        alert,
        basket,
    };

    return (
        <MarketContext.Provider value={contextValue}>
            {props.children}
        </MarketContext.Provider>
    );
};

export default MarketProvider;
