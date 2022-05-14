import React, { useContext, useEffect } from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';
import { MarketContext } from '../../context/marketContext';
import Alert from './Alert';
import AlertToFinish from './WarnAlert';

const ActionButtons = () => {
    const marketContextCtx = useContext(MarketContext);

    const {
        hasItems,
        alert,
        warnAlert,
        getProductsFromLS,
        saveBasketOnLS,
        deleteBasketFromLS,
    } = marketContextCtx;

    useEffect(() => {
        getProductsFromLS();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='action-buttons'>
            <div className='container'>
                {hasItems === false ? (
                    <button className='save-changes' onClick={saveBasketOnLS}>
                        <FaSave /> Salvar
                    </button>
                ) : (
                    <button
                        className='delete-changes'
                        onClick={deleteBasketFromLS}
                    >
                        <FaTrash /> Apagar
                    </button>
                )}
                {alert ? <Alert /> : ''}
                {warnAlert ? <AlertToFinish /> : ''}
            </div>
        </div>
    );
};

export default ActionButtons;
