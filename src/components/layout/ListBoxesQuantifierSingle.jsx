import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const ListBoxesQuantifierSingle = (props) => {
    const [takedItem, setTakedItem] = useState(false);

    const toggleClassName = () => {
        setTakedItem(!takedItem);
    };

    return (
        <div
            className={`list-quantifier-single ${
                takedItem ? 'takedItem2' : ''
            }`}
        >
            <div className='list-quantifier-text'>
                <p>{props.productsName}</p>
                <span>{props.quantity}</span>
                <div id='checkbox'>
                    <div className='box-checkbox' onClick={toggleClassName}>
                        <FaCheck />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListBoxesQuantifierSingle;
