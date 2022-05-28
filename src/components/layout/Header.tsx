import { Box, Container, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import initClock from '../../utils/clock';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Header = () => {
    let [timer, setTimer] = useState({
        hours: '00:00:00',
        date: '00/00/0000',
        day: '',
    });

    let { hours, day, date } = timer;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer({
                hours: initClock('hours'),
                date: initClock('date'),
                day: initClock('day'),
            });
        }, 500);

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <Box component='header' paddingY='15px' paddingX='2%'>
            <Container maxWidth='xs'>
                <Box pb={3}>
                    <Typography textAlign='center' variant='h4'>
                        Lista de Compras
                    </Typography>
                </Box>
                <Stack
                    direction='row'
                    justifyContent='space-around'
                    alignItems='center'
                    spacing={4}
                    pb={1}
                >
                    <Box>
                        <Box>
                            <Typography variant='h5' textAlign='center'>
                                {day}
                            </Typography>
                        </Box>
                        <Stack
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            className='date'
                            flexDirection='row'
                        >
                            <CalendarMonthIcon
                                sx={{ fontSize: '1.7rem', mr: 1 }}
                            />
                            <Typography variant='h6'>{date}</Typography>
                        </Stack>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        className='hours'
                    >
                        <AccessTimeIcon sx={{ fontSize: '1.7rem', mr: 1 }} />
                        <Typography
                            variant='h5'
                            textAlign='center'
                            sx={{ mt: '1.5px' }}
                        >
                            {hours}
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Header;
