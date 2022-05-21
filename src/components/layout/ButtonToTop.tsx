import React from 'react';

const ButtonToTop = () => {
    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className='buttonToTop' onClick={toTop}>
            VOLTAR AO INÍCIO
        </div>
    );
};

export default ButtonToTop;
