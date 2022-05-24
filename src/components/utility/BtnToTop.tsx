import { Button, Typography } from '@mui/material';

const BtnToTop = () => {
    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <Button
            fullWidth
            variant='contained'
            color='warning'
            onClick={toTop}
            sx={{ p: 2, borderRadius: '20px' }}
        >
            <Typography variant='h6' color='#e7e7e7'>
                Voltar ao Início
            </Typography>
        </Button>
    );
};

export default BtnToTop;
