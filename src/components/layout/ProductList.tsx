import { useContext, useEffect } from 'react';
import ProductItem from './ProductItem';
import BtnToTop from '../utility/ProductList/BtnToTop';
import { MarketContext } from '../../context/marketContext';
import { Box, Container } from '@mui/material';

const ProductList = () => {
    const marketContextCtx = useContext(MarketContext);

    const { products, getProductsFromLS } = marketContextCtx;

    useEffect(() => {
        getProductsFromLS();
        // eslint-disable-next-line
    }, []);

    return (
        <Box component='section' className='product-list'>
            <Container maxWidth='xs'>
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
                <BtnToTop />
            </Container>
        </Box>
    );
};

export default ProductList;
