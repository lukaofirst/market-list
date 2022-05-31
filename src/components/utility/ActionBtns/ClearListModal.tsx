import { Backdrop, Box, Button, Fade, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { MarketContext } from '../../../context/marketContext';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '280px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '20px',
    p: 3,
    outline: 0,
};

interface IModalComp {
    open: boolean;
    toggleOpenModal: () => void;
}

const ClearListModal = ({ open, toggleOpenModal }: IModalComp) => {
    const { deleteBasketFromLS } = useContext(MarketContext);

    const handleClearList = () => {
        toggleOpenModal();
        deleteBasketFromLS();
    };

    return (
        <Modal
            open={open}
            onClose={toggleOpenModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 300,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Box
                        display='flex'
                        justifyContent='flex-end'
                        alignItems='center'
                    >
                        <Button
                            variant='outlined'
                            color='error'
                            onClick={toggleOpenModal}
                            sx={{
                                borderRadius: '10px',
                            }}
                        >
                            <CloseIcon />
                        </Button>
                    </Box>
                    <Button
                        onClick={handleClearList}
                        fullWidth
                        color='error'
                        variant='contained'
                        sx={{ mt: 3, p: 2, borderRadius: '20px' }}
                    >
                        Deletar Lista
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ClearListModal;
