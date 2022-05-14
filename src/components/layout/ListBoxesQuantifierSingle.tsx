import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const ListBoxesQuantifierSingle = (props: any) => {
    const [takedItem2, setTakedItem2] = useState(false);

    const toggleClassName = () => {
        setTakedItem2(!takedItem2);
    };

    return (
        <div
            className={`list-quantifier-single ${
                takedItem2 ? 'takedItem2' : ''
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
