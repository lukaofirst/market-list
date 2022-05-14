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
        <div
            className={`product-to-take-single ${takedItem ? 'takedItem' : ''}`}
        >
            <div className='product-to-take-text'>
                <p>{productFromLS.name}</p>
                <span>{productFromLS.quantity}</span>
                <div id='checkbox'>
                    <div className='box-checkbox' onClick={checkboxHandler}>
                        <FaCheck />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItemToTake;
