//Таймер

const countTimer = (deadline) => {
    let timerDays = document.querySelector('.count_1 > span'),
        timerHours = document.querySelector('.count_2 > span'),
        timerMinutes = document.querySelector('.count_3 > span'),
        timerSeconds = document.querySelector('.count_4 > span');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60 / 60) % 24),
            days = Math.floor(timeRemaining / 60 / 60 / 24);

        if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
            seconds = '00';
            minutes = '00';
            hours = '00';
            days = '00';
        }

        if (days < 10 || hours < 10 || minutes < 10 || seconds < 10) {
            seconds = ('0' + seconds).slice(-2);
            minutes = ('0' + minutes).slice(-2);
            hours = ('0' + hours).slice(-2);
            days = ('0' + days).slice(-2);
        }
        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        };
    };

    const updateClock = () => {
        let timer = getTimeRemaining();

        if (timer.timeRemaining > 0) {
            timerDays.textContent = timer.days;
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
        } else {
            clearInterval(interval);
        }
    };
    let interval = setInterval(updateClock, 1000);

};

export default countTimer;

