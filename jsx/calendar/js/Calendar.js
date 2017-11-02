const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];

const ofMonths = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
];

function Calendar({date}) {
    if (!date) {
        return null;
    }

    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    startDate.setDate(1 - getDay(startDate));
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const firstDayOfWeek = startDate;
    const countOfWeeks = Math.ceil((lastDate - startDate) / 1000 / 60 / 60 / 24 / 7);
    let weeks = new Array(countOfWeeks).fill(null);
    weeks = weeks.map((item, index) => {
        const week = <WeekElement key={index} date={new Date(firstDayOfWeek)} month={date.getMonth()} day={date.getDate()} />;
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 7);
        return week;
    });

    function getDay(date) {
        const day = date.getDay();
        return day === 0 ? 6 : day - 1;
    }

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{days[date.getDay()]}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                    <div className="ui-datepicker-material-month">{ofMonths[date.getMonth()]}</div>
                    <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{months[date.getMonth()]}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
                </thead>
                <tbody>
                    {weeks}
                </tbody>
            </table>
        </div>
    );
}

function WeekElement({date, month, day}) {
    let days = new Array(7).fill(null);
    days = days.map((item, index) => {
        const dayElement = <DayElement key={index} date={new Date(date)} month={month} day={day}/>;
        date.setDate(date.getDate() + 1);
        return dayElement;
    });

    return (
        <tr>
            {days}
        </tr>
    )
}

function DayElement({date, month, day}) {
    return (
        <td className={`${date.getMonth() !== month ? 'ui-datepicker-other-month' : (date.getMonth() === month && date.getDate() === day ? 'ui-datepicker-today' : '')}`}>{date.getDate()}</td>
    );
}
