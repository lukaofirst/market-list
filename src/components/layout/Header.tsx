import React, { useState, useEffect } from 'react';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

export const Header = () => {
    let today = new Date();

    let [timer, setTimer] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        day: 0,
        date: 0,
        month: 0,
        year: 0,
    });

    let { hours, minutes, seconds, day, date, month, year } = timer;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer({
                hours: today.getHours(),
                minutes: today.getMinutes(),
                seconds: today.getSeconds(),
                day: today.getDay(),
                date: today.getDate(),
                month: today.getMonth() + 1,
                year: today.getFullYear(),
            });
        }, 100);

        return () => clearInterval(interval);

        // eslint-disable-next-line
    }, [timer]);

    const addZeros = (n: string) => {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    };

    const dayNames = [
        'Domingo',
        'Segunda-Feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
    ];

    return (
        <header className='main-header'>
            <div className='container'>
                <div className='header-title'>
                    <h3>Lista de Compras</h3>
                </div>
                <div id='header-time'>
                    <div className='dayAndDate'>
                        <div className='day'>
                            <span>{dayNames[day]}</span>
                        </div>

                        <div className='date'>
                            <FaRegCalendarAlt />
                            <span>
                                {addZeros(date.toString())}/
                                {addZeros(month.toString())}/
                                {addZeros(year.toString())}
                            </span>
                        </div>
                    </div>
                    <div className='hours'>
                        <FaRegClock />
                        <span>
                            {addZeros(hours.toString())}:
                            {addZeros(minutes.toString())}:
                            {addZeros(seconds.toString())}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
