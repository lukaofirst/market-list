import { useState, useEffect, createContext } from 'react';
import Product from './models/Product';
import productsData from '../productsData/productsData';
import ProductQuantity from './models/ProductQuantity';

interface IMarketContext {
    getProductsFromLS: () => void;
    addProductToBasket: (item: ProductQuantity) => void;
    removeProductFromBasket: (item: ProductQuantity) => void;
    saveBasketOnLS: () => void;
    deleteBasketFromLS: () => void;
    hasItems: boolean;
    products: Product[];
    productsFromLS: ProductQuantity[];
    basket: ProductQuantity[];
}

export const MarketContext = createContext<IMarketContext>({
    getProductsFromLS: () => {},
    addProductToBasket: () => {},
    removeProductFromBasket: () => {},
    saveBasketOnLS: () => {},
    deleteBasketFromLS: () => {},
    hasItems: false,
    products: [],
    productsFromLS: [],
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

    useEffect(() => {
        setProducts(productsData);
    }, []);

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
    const addProductToBasket = (productItemData: ProductQuantity) => {
        setBasket((prevState) => [...prevState, productItemData]);
    };

    // Remove product from basket
    const removeProductFromBasket = (productItemData: ProductQuantity) => {
        setBasket((prevState) =>
            prevState.filter((item) => item.id !== productItemData.id)
        );
    };

    // Save basket on localStorage
    const saveBasketOnLS = () => {
        if (basket.length !== 0) {
            localStorage.setItem('BuyList', JSON.stringify(basket));
            window.location.reload();
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
        removeProductFromBasket,
        saveBasketOnLS,
        deleteBasketFromLS,
        hasItems,
        products,
        productsFromLS,
        basket,
    };

    return (
        <MarketContext.Provider value={contextValue}>
            {props.children}
        </MarketContext.Provider>
    );
};

export default MarketProvider;
