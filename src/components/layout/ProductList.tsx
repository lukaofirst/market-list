import { useState, useContext, useEffect } from 'react';
import ProductItem from './ProductItem';
import BtnToTop from '../utility/ProductList/BtnToTop';
import { MarketContext } from '../../context/marketContext';
import { Box, Container } from '@mui/material';

const ProductList = () => {
    const marketContextCtx = useContext(MarketContext);

    const { products } = marketContextCtx;

    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        setScrollToTop(true);
    }, []);

    return (
        <Box component='section' className='product-list'>
            <Container maxWidth='xs'>
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
                {scrollToTop ? <BtnToTop /> : ''}
            </Container>
        </Box>
    );
};

export default ProductList;
