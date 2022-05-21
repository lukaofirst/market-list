import { Box, Container } from '@mui/material';
import { useContext, useEffect } from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';
import { MarketContext } from '../../context/marketContext';
import AlertAppComponent from './AlertComp';

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
        <Box className='action-buttons'>
            <Container maxWidth='xs' className='container'>
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
                {alert && (
                    <AlertAppComponent message='Selecione pelo menos 1 produto' />
                )}
            </Container>
        </Box>
    );
};

export default ActionButtons;
