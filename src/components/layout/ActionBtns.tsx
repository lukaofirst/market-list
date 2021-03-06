import { Box, Container } from '@mui/material';
import { useContext, useState } from 'react';
import { MarketContext } from '../../context/marketContext';
import ReactDOM from 'react-dom';
import BtnComp from '../utility/ActionBtns/BtnComp';
import ClearListModal from '../utility/ActionBtns/ClearListModal';
import ReviewListModal from '../utility/ActionBtns/ReviewListModal';

const ActionBtns = () => {
    const { hasItems, basket } = useContext(MarketContext);

    const [openReviewList, setOpenReviewList] = useState<boolean>(false);
    const [openClearList, setOpenClearList] = useState<boolean>(false);

    const toggleOpenReviewListModal = () => {
        setOpenReviewList((prevState) => !prevState);
    };

    const toggleOpenClearListModal = () => {
        setOpenClearList((prevState) => !prevState);
    };

    return (
        <>
            <Box paddingBottom='15px' textAlign='center'>
                <Container maxWidth='xs'>
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
