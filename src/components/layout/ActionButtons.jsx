import React, { useContext, useEffect } from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';
import { LocalStorageContext } from '../../context/localStorageContext';
import Alert from './Alert';
import AlertToFinish from './AlertToFinish';

const ActionButtons = () => {
    const localStorageCtx = useContext(LocalStorageContext);

    const { hasItems, alert, alertToFinish, getItems, addItems, deleteItems } =
        localStorageCtx;

    useEffect(() => {
        getItems();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='action-buttons'>
            <div className='container'>
                {hasItems === false ? (
                    <button className='save-changes' onClick={addItems}>
                        <FaSave /> Salvar
                    </button>
                ) : (
                    <button className='delete-changes' onClick={deleteItems}>
                        <FaTrash /> Apagar
                    </button>
                )}
                {alert ? <Alert /> : ''}
                {alertToFinish ? <AlertToFinish /> : ''}
            </div>
        </div>
    );
};

export default ActionButtons;
