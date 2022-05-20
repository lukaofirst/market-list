interface IAlert {
    message: string;
}

const Alert = ({ message }: IAlert) => {
    return <div className='alert'>{message}</div>;
};

export default Alert;
