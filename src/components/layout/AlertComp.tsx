import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';

interface IAlert {
    message: string;
}

const AlertComp = ({ message }: IAlert) => {
    return (
        <Alert
            variant='filled'
            severity='error'
            sx={{ mt: 2, color: 'error', borderRadius: '10px' }}
        >
            <Typography>{message}</Typography>
        </Alert>
    );
};

export default AlertComp;
