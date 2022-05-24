import { Box, Container, Link, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box component='footer'>
            <Container>
                <Typography variant='body1' textAlign='center' color='white'>
                    Desenvolvido por{' '}
                    <Link
                        href='https://github.com/lukaofirst'
                        target='_blank'
                        rel='noreferrer'
                        fontWeight='bold'
                        sx={{ color: '#27b150', textDecoration: 'none' }}
                    >
                        Lucas Macedo
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
