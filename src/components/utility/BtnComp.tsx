import { Button, Typography } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DeleteIcon from '@mui/icons-material/Delete';

interface IBtnComp {
    color: 'success' | 'error';
    text: string;
    icon: 'grocery' | 'trash';
    onClick: () => void;
}

const BtnComp = ({ color, text, icon, onClick }: IBtnComp) => {
    return (
        <Button
            variant='contained'
            size='small'
            color={color}
            onClick={onClick}
            sx={{ px: 4, py: 2, borderRadius: '20px' }}
        >
            {icon === 'grocery' ? (
                <LocalGroceryStoreIcon
                    sx={{
                        fontSize: '2rem',
                        color: '#e7e7e7',
                        mr: 1,
                    }}
                />
            ) : (
                <DeleteIcon
                    sx={{
                        fontSize: '2rem',
                        color: '#e7e7e7',
                        mr: 1,
                    }}
                />
            )}

            <Typography variant='h6' color='#e7e7e7'>
                {text}
            </Typography>
        </Button>
    );
};

export default BtnComp;
