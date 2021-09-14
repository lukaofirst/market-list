import React, { useState } from 'react';
import { FaMinus, FaPlus, FaCheck } from 'react-icons/fa';

const ListBoxesSingle = (props) => {
    const [count, setCount] = useState(1);
    const [takedItem, setTakedItem] = useState(false);

    const onClick = (e) => {
        if (e.currentTarget.classList.contains('plus-btn')) {
            setCount(count + 1);
        } else {
            setCount(count - 1);

            if (count < 1) {
                setCount(0);
            }
        }
    };

    const toggleClassName = () => {
        setTakedItem(!takedItem);
    };

    return (
        <div className={`list-box-single ${takedItem ? 'takedItem' : ''}`}>
            <div className='box-title'>
                <span>{props.productsName}</span>
            </div>
            <div className='box-btn'>
                <div className='minus-btn' onClick={onClick}>
                    <FaMinus />
                </div>
                <input type='number' id='quantifier' value={count} disabled />
                <div className='plus-btn' onClick={onClick}>
                    <FaPlus />
                </div>
            </div>
            <div id='checkbox'>
                <div className='box-checkbox' onClick={toggleClassName}>
                    <FaCheck />
                </div>
            </div>
        </div>
    );
};

export default ListBoxesSingle;
