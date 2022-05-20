import { useState, useEffect } from 'react';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import initClock from '../../utils/clock';

export const Header = () => {
    let [timer, setTimer] = useState({
        hours: '00:00:00',
        date: '00/00/0000',
        day: '',
    });

    let { hours, day, date } = timer;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer({
                hours: initClock('hours'),
                date: initClock('date'),
                day: initClock('day'),
            });
        }, 500);

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <header className='main-header'>
            <div className='container'>
                <div className='header-title'>
                    <h3>Lista de Compras</h3>
                </div>
                <div id='header-time'>
                    <div className='dayAndDate'>
                        <div className='day'>
                            <span>{day}</span>
                        </div>

                        <div className='date'>
                            <FaRegCalendarAlt />
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className='hours'>
                        <FaRegClock />
                        <span>{hours}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
