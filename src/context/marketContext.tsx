import { useState, useEffect, createContext } from 'react';
import Product from './models/Product';
import productsData from '../productsData/productsData';

interface IMarketContext {
    getProductsFromLS: () => void;
    addProductToBasket: (item: Product) => void;
    removeProductFromBasket: (item: Product) => void;
    saveBasketOnLS: () => void;
    deleteBasketFromLS: () => void;
    hasItems: boolean;
    products: Product[];
    basket: Product[];
}

export const MarketContext = createContext<IMarketContext>({
    getProductsFromLS: () => {},
    addProductToBasket: () => {},
    removeProductFromBasket: () => {},
    saveBasketOnLS: () => {},
    deleteBasketFromLS: () => {},
    hasItems: false,
    products: [],
    basket: [],
});

interface IMarketProvider {
    children: JSX.Element[];
}

const MarketProvider = (props: IMarketProvider) => {
    const [hasItems, setHasItems] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>(productsData);
    const [basket, setBasket] = useState<Product[]>([]);

    useEffect(() => {
        getProductsFromLS();
    }, []);

    const getProductsFromLS = () => {
        const buyList = localStorage.getItem('BuyList');

        if (buyList === null) {
            setHasItems(false);
            setProducts(productsData);
        } else {
            setHasItems(true);
            setProducts(JSON.parse(buyList));
        }
    };

    const addProductToBasket = (productItemData: Product) => {
        setBasket((prevState) => [...prevState, productItemData]);
    };

    const removeProductFromBasket = (productItemData: Product) => {
        setBasket((prevState) =>
            prevState.filter((item) => item.id !== productItemData.id)
        );
    };

    const saveBasketOnLS = () => {
        if (basket.length !== 0) {
            localStorage.setItem('BuyList', JSON.stringify(basket));
            window.location.reload();
        }
    };

    const deleteBasketFromLS = () => {
        localStorage.clear();
        setHasItems(false);
        setProducts(productsData);
    };

    const contextValue = {
        getProductsFromLS,
        addProductToBasket,
        removeProductFromBasket,
        saveBasketOnLS,
        deleteBasketFromLS,
        hasItems,
        products,
        basket,
    };

    return (
        <MarketContext.Provider value={contextValue}>
            {props.children}
        </MarketContext.Provider>
    );
};

export default MarketProvider;
