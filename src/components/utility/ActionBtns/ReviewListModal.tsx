import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReviewList from '../../layout/ReviewList';
import Product from '../../../context/models/Product';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '20px',
    p: 3,
    outline: 0,
};

interface IModalComp {
    open: boolean;
    toggleOpenModal: () => void;
    basket: Product[];
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
                            color='#ce1654'
                            sx={{ py: 2 }}
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
