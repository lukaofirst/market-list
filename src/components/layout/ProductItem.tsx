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
        <div className={`product-item ${takedItem ? 'takedItem' : ''}`}>
            {!hasItems && (
                <div className='box-title'>
                    <span
                        ref={
                            productNameRef as MutableRefObject<HTMLSpanElement>
                        }
                    >
                        {product.name}
                    </span>
                </div>
            )}
            <div className='box-btn'>
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
            </div>
            <div id='checkbox'>
                <button className='box-checkbox' onClick={checkboxHandler}>
                    <FaCheck />
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
