import React from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';

const ActionButtons = () => {
    return (
        <div className='action-buttons'>
            <div className='container'>
                <button className='save-changes'>
                    <FaSave /> Salvar
                </button>
                <button className='delete-changes'>
                    <FaTrash /> Apagar
                </button>
            </div>
        </div>
    );
};

export default ActionButtons;
