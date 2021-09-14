import React from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';

const ActionButtons = () => {
    const addItems = () => {
        let quantifierValues = document.querySelectorAll('#quantifier');

        quantifierValues.forEach((quantifier) => {
            saveItems(quantifier.value);
        });
    };

    const saveItems = (item) => {
        let items;
        if (localStorage.getItem('buyListQuantifiers') === null) {
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem('buyListQuantifiers'));
        }

        items.push(item);

        localStorage.setItem('buyListQuantifiers', JSON.stringify(items));
    };

    const clearSavedItems = () => {
        if (window.confirm('Você deseja apagar os dados salvos?')) {
            localStorage.clear();
            window.location.reload();
        }
    };

    return (
        <div className='action-buttons'>
            <div className='container'>
                <button className='save-changes' onClick={addItems}>
                    <FaSave /> Salvar
                </button>
                <button className='delete-changes' onClick={clearSavedItems}>
                    <FaTrash /> Apagar
                </button>
            </div>
        </div>
    );
};

export default ActionButtons;
