import { Box } from '@mui/material';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import ProductQuantity from '../../context/models/ProductQuantity';

interface IProductItemToTake {
    productFromLS: ProductQuantity;
}

const ProductItemToTake = ({ productFromLS }: IProductItemToTake) => {
    const [takedItem, setTakedItem] = useState(false);

    const checkboxHandler = () => {
        setTakedItem((prevState) => !prevState);
    };

    return (
        <Box
            className={`product-to-take-single ${takedItem ? 'takedItem' : ''}`}
        >
            <Box className='product-to-take-text'>
                <p>{productFromLS.name}</p>
                <span>{productFromLS.quantity}</span>
                <Box id='checkbox'>
                    <Box className='box-checkbox' onClick={checkboxHandler}>
                        <FaCheck />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductItemToTake;
