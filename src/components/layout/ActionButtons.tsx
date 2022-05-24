import { Box, Container } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MarketContext } from '../../context/marketContext';
import AlertAppComponent from './AlertComp';
import ReviewListModal from './ReviewListModal';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearListModal from './ClearListModal';

const ActionButtons = () => {
    const marketContextCtx = useContext(MarketContext);

    const [openReviewList, setOpenReviewList] = useState<boolean>(false);
    const [openClearList, setOpenClearList] = useState<boolean>(false);

    const toggleOpenReviewListModal = () => {
        setOpenReviewList((prevState) => !prevState);
    };

    const toggleOpenClearListModal = () => {
        setOpenClearList((prevState) => !prevState);
    };

    const { hasItems, alert, getProductsFromLS, basket } = marketContextCtx;

    useEffect(() => {
        getProductsFromLS();
        // eslint-disable-next-line
    }, []);

    return (
        <Box className='action-buttons'>
            <Container maxWidth='xs' className='container'>
                {hasItems === false ? (
                    <button
                        className='save-changes'
                        onClick={toggleOpenReviewListModal}
                    >
                        <LocalGroceryStoreIcon /> Salvar
                    </button>
                ) : (
                    <button
                        className='delete-changes'
                        onClick={toggleOpenClearListModal}
                    >
                        <DeleteIcon /> Apagar
                    </button>
                )}
                {alert && (
                    <AlertAppComponent message='Selecione pelo menos 1 produto' />
                )}
            </Container>
            <ReviewListModal
                open={openReviewList}
                toggleOpenModal={toggleOpenReviewListModal}
                basket={basket}
            />
            <ClearListModal
                open={openClearList}
                toggleOpenModal={toggleOpenClearListModal}
            />
        </Box>
    );
};

export default ActionButtons;
