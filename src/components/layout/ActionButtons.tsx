import { useContext, useEffect } from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';
import { MarketContext } from '../../context/marketContext';
import Alert from './Alert';

const ActionButtons = () => {
    const marketContextCtx = useContext(MarketContext);

    const {
        hasItems,
        alert,
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
                {alert && <Alert message='Selecione pelo menos 1 produto' />}
            </div>
        </div>
    );
};

export default ActionButtons;
