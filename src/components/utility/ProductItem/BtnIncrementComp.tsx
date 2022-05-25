import { Button } from '@mui/material';
import { MouseEvent } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface IBtnComp {
    icon: 'minus' | 'plus';
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const BtnIncrementComp = ({ icon, onClick }: IBtnComp) => {
    return (
        <Button
            variant='contained'
            color='warning'
            data-btn={icon}
            onClick={(e: MouseEvent<HTMLButtonElement>) => onClick(e)}
            sx={{ borderRadius: '50%', height: '65px' }}
        >
            {icon === 'minus' ? (
                <FaMinus
                    style={{
                        fontSize: '2rem',
                        color: '#e7e7e7',
                    }}
                />
            ) : (
                <FaPlus style={{ fontSize: '2rem', color: '#e7e7e7' }} />
            )}
        </Button>
    );
};

export default BtnIncrementComp;
