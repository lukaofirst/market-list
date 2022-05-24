import { Box, Container } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MarketContext } from '../../context/marketContext';
import AlertAppComponent from '../utility/AlertComp';
import ReviewListModal from '../utility/ReviewListModal';
import ClearListModal from '../utility/ClearListModal';
import ReactDOM from 'react-dom';
import BtnComp from '../utility/BtnComp';

const ActionBtns = () => {
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
        <>
            <Box className='action-buttons'>
                <Container maxWidth='xs' className='container'>
                    {hasItems === false ? (
                        <BtnComp
                            color='success'
                            text='Salvar'
                            icon='grocery'
                            onClick={toggleOpenReviewListModal}
                        />
                    ) : (
                        <BtnComp
                            color='error'
                            text='Apagar'
                            icon='trash'
                            onClick={toggleOpenClearListModal}
                        />
                    )}
                    {alert && (
                        <AlertAppComponent message='Selecione pelo menos 1 produto' />
                    )}
                </Container>
            </Box>
            {ReactDOM.createPortal(
                <ReviewListModal
                    open={openReviewList}
                    toggleOpenModal={toggleOpenReviewListModal}
                    basket={basket}
                />,
                document.getElementById('review-list-modal') as HTMLDivElement
            )}
            {ReactDOM.createPortal(
                <ClearListModal
                    open={openClearList}
                    toggleOpenModal={toggleOpenClearListModal}
                />,
                document.getElementById('clear-list-modal') as HTMLDivElement
            )}
        </>
    );
};

export default ActionBtns;
