import React, { useContext, useEffect } from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';
import LocalStorageContext from '../../context/localStorageContext';

const ActionButtons = () => {
    const localStorageContext = useContext(LocalStorageContext);

    const { hasItems, getItems, addItems, deleteItems } = localStorageContext;

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
            </div>
        </div>
    );
};

export default ActionButtons;
