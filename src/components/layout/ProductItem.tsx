import { Box, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MarketContext } from '../../context/marketContext';
import Product from '../../context/models/Product';
import BtnIncrementComp from '../utility/ProductItem/BtnIncrementComp';
import { MouseEvent } from 'react';

interface IProductItem {
    product: Product;
}

const ProductItem = ({ product }: IProductItem) => {
    const [count, setCount] = useState(1);
    const [takedItem, setTakedItem] = useState(false);

    const { addProductToBasket, removeProductFromBasket, hasItems } =
        useContext(MarketContext);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.getAttribute('data-btn') === 'plus') {
            setCount(count + 1);
        } else {
            setCount(count - 1);

            if (count < 1) {
                setCount(0);
            }
        }
    };

    const checkboxHandler = () => {
        setTakedItem((prevState) => !prevState);

        setTimeout(() => {
            const productItemData: Product = {
                id: product.id,
                name: product.name,
                quantity: count,
            };

            if (!takedItem) {
                addProductToBasket(productItemData);
            } else {
                removeProductFromBasket(productItemData);
            }
        }, 500);
    };

    return (
        <Box
            className={`${
                hasItems ? 'product-item-to-take-single' : 'product-item'
            } ${takedItem && 'takedItem'}`}
        >
            {hasItems ? (
                <>
                    <Box className='product-item-to-take-text'>
                        <p>{product.name}</p>
                        <span>{product.quantity}</span>
                        <Box id='checkbox'>
                            <Box
                                className='box-checkbox'
                                onClick={checkboxHandler}
                            >
                                <FaCheck />
                            </Box>
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box className='box-title'>
                        <Typography variant='h4' fontSize='2.3rem'>
                            {product.name}
                        </Typography>
                    </Box>
                    <Box className='box-btn'>
                        <BtnIncrementComp icon='minus' onClick={onClick} />
                        <input
                            type='number'
                            id='quantifier'
                            value={count}
                            disabled
                        />
                        <BtnIncrementComp icon='plus' onClick={onClick} />
                    </Box>
                    <Box id='checkbox'>
                        <button
                            className='box-checkbox'
                            onClick={checkboxHandler}
                        >
                            <FaCheck />
                        </button>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ProductItem;
