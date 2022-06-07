export default function initClock(timeType: 'hours' | 'date' | 'day') {
    const today = new Date();

    const dayNames = [
        'Domingo',
        'Segunda-Feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
    ];

    if (timeType === 'hours') {
        return today.toLocaleTimeString('pt-BR');
    } else if (timeType === 'date') {
        return today.toLocaleDateString('pt-BR');
    } else {
        return dayNames[today.getDay()];
    }
}
