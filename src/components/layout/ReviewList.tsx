import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Button,
} from '@mui/material';
import { useContext } from 'react';
import { MarketContext } from '../../context/marketContext';

const ReviewList = () => {
    const { basket, saveBasketOnLS } = useContext(MarketContext);

    return (
        <>
            <TableContainer
                component={Paper}
                sx={{
                    maxWidth: '100%',
                    marginY: 3,
                    maxHeight: '300px',
                    borderRadius: '20px',
                }}
            >
                <Table aria-label='review list'>
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: '#535353',
                            }}
                        >
                            <TableCell sx={{ color: '#e7e7e7' }}>
                                Produto
                            </TableCell>
                            <TableCell
                                sx={{
                                    color: '#e7e7e7',
                                    textAlign: 'center',
                                }}
                            >
                                Quantidade
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Typography variant='h5'>
                                        {item.name}
                                    </Typography>
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant='h5'>
                                        {item.quantity}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                fullWidth
                size='large'
                color='success'
                variant='contained'
                onClick={saveBasketOnLS}
                sx={{ p: 2, borderRadius: '20px' }}
            >
                <Typography color='white'>Salvar Lista</Typography>
            </Button>
        </>
    );
};

export default ReviewList;
