import { Box, Typography } from '@mui/material';
import { MutableRefObject, useContext, useRef, useState } from 'react';
import { FaMinus, FaPlus, FaCheck } from 'react-icons/fa';
import { MarketContext } from '../../context/marketContext';
import Product from '../../context/models/Product';

interface IProductItem {
    hasItems: boolean;
    product: Product;
}

const ProductItem = ({ hasItems, product }: IProductItem) => {
    const productNameRef = useRef<HTMLSpanElement>();
    const productQuantityRef = useRef<HTMLInputElement>();

    const [count, setCount] = useState(1);
    const [takedItem, setTakedItem] = useState(false);

    const { addProductToBasket } = useContext(MarketContext);

    const onClick = (e: any) => {
        if (e.currentTarget.classList.contains('plus-btn')) {
            setCount(count + 1);
        } else {
            setCount(count - 1);

            if (count < 1) {
                setCount(0);
            }
        }
    };

    const checkboxHandler = () => {
        addProductToBasket({
            id: product.id,
            name: productNameRef.current?.textContent!,
            quantity: +productQuantityRef.current?.value!,
        });

        setTakedItem((prevState) => !prevState);
    };

    return (
        <Box className={`product-item ${takedItem ? 'takedItem' : ''}`}>
            <Box className='box-title'>
                <Typography
                    ref={productNameRef as MutableRefObject<HTMLSpanElement>}
                    variant='h4'
                    fontSize='2.3rem'
                >
                    {product.name}
                </Typography>
            </Box>
            <Box className='box-btn'>
                <button className='minus-btn' onClick={onClick}>
                    <FaMinus />
                </button>
                <input
                    type='number'
                    id='quantifier'
                    value={count}
                    ref={
                        productQuantityRef as MutableRefObject<HTMLInputElement>
                    }
                    disabled
                />
                <button className='plus-btn' onClick={onClick}>
                    <FaPlus />
                </button>
            </Box>
            <Box id='checkbox'>
                <button className='box-checkbox' onClick={checkboxHandler}>
                    <FaCheck />
                </button>
            </Box>
        </Box>
    );
};

export default ProductItem;
