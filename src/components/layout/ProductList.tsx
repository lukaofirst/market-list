import { useState, useContext, useEffect } from 'react';
import ProductItem from './ProductItem';
import ButtonToTop from './ButtonToTop';
import { MarketContext } from '../../context/marketContext';
import ProductItemToTake from './ProductItemToTake';
import { Box, Container } from '@mui/material';

const ProductList = () => {
    const marketContextCtx = useContext(MarketContext);

    const { hasItems, products, productsFromLS } = marketContextCtx;

    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        //getItems();
        setScrollToTop(true);
        // eslint-disable-next-line
    }, []);

    return (
        <Box component='section' className='product-list'>
            <Container maxWidth='xs' className='container'>
                {hasItems
                    ? productsFromLS.map((product) => (
                          <ProductItemToTake
                              productFromLS={product}
                              key={product.id}
                          />
                      ))
                    : products.map((product) => (
                          <ProductItem
                              hasItems={hasItems}
                              product={product}
                              key={product.id}
                          />
                      ))}
                {scrollToTop ? <ButtonToTop /> : ''}
            </Container>
        </Box>
    );
};

export default ProductList;
