import React, { useState, useContext, useEffect } from 'react';
import ProductItem from './ProductItem';
import ButtonToTop from './ButtonToTop';
import { MarketContext } from '../../context/marketContext';

const ProductList = () => {
    const marketContextCtx = useContext(MarketContext);

    const { hasItems, products } = marketContextCtx;

    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        //getItems();
        setScrollToTop(true);
        // eslint-disable-next-line
    }, []);

    return (
        <section className='product-list'>
            <div className='container'>
                {products.map((product) => (
                    <ProductItem
                        hasItems={hasItems}
                        product={product}
                        key={product.id}
                    />
                ))}
                {scrollToTop ? <ButtonToTop /> : ''}
            </div>
        </section>
    );
};

export default ProductList;
