import React, { useContext, useEffect } from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';
import { MarketContext } from '../../context/marketContext';
import Alert from './Alert';
import AlertToFinish from './WarnAlert';

const ActionButtons = () => {
    const marketContextCtx = useContext(MarketContext);

    const { hasItems, alert, warnAlert, getProductsFromLS } = marketContextCtx;

    useEffect(() => {
        getProductsFromLS();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='action-buttons'>
            <div className='container'>
                {hasItems === false ? (
                    <button className='save-changes'>
                        <FaSave /> Salvar
                    </button>
                ) : (
                    <button className='delete-changes'>
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
