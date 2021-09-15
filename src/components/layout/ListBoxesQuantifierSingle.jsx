import React from 'react';

const ListBoxesQuantifierSingle = (props) => {
    return (
        <div className='list-quantifier-single'>
            <div className='list-quantifier-text'>
                <p>{props.productsName}</p>
                <span>{props.quantity}</span>
            </div>
        </div>
    );
};

export default ListBoxesQuantifierSingle;
