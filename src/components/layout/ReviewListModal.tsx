import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ProductQuantity from '../../context/models/ProductQuantity';
import ReviewList from './ReviewList';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 380,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '20px',
    p: 3,
    outline: 0,
};

interface IModalComp {
    open: boolean;
    toggleOpenModal: () => void;
    basket: ProductQuantity[];
}

const ReviewListModal = ({ open, toggleOpenModal, basket }: IModalComp) => {
    return (
        <Modal
            open={open}
            onClose={toggleOpenModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Typography variant='h5'>Sua lista</Typography>
                        <Button
                            variant='outlined'
                            color='error'
                            onClick={toggleOpenModal}
                            sx={{ borderRadius: '10px' }}
                        >
                            <CloseIcon />
                        </Button>
                    </Box>
                    {basket.length > 0 ? (
                        <ReviewList />
                    ) : (
                        <Typography
                            variant='h5'
                            textAlign='center'
                            sx={{ py: 2, color: '#D32F2F' }}
                        >
                            A sua lista está vazia!
                        </Typography>
                    )}
                </Box>
            </Fade>
        </Modal>
    );
};

export default ReviewListModal;
