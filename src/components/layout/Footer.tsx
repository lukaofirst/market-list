import { Box, Container, Link, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component='footer'
            position='fixed'
            padding='5px'
            width='100%'
            bottom={0}
            sx={{ backgroundColor: '#535353' }}
        >
            <Container>
                <Typography variant='body1' textAlign='center' color='#e7e7e7'>
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
