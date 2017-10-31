function Calendar({date}) {
    if (!date) {
        return null;
    }

    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Понедельник',
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

    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    startDate.setDate(1 - getDay(startDate));
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const firstDayOfWeek = startDate;
    const weeks = [];
    while (firstDayOfWeek < lastDate) {
        weeks.push(getWeekElement(firstDayOfWeek, date.getMonth()));
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 7);
    }

    function getDay(date) {
        const day = date.getDay();
        return day === 0 ? 6 : day - 1;
    }

    function getWeekElement(date, month) {
        date = new Date(date);
        const days = [];
        days.push(getDayElement(date, month));
        for (let i = 0; i < 6; i++) {
            date.setDate(date.getDate() + 1);
            days.push(getDayElement(date, month));
        }

        return (
            <tr>
                {days}
            </tr>
        )
    }

    function getDayElement(date, month) {
        let day;
        if (date.getMonth() === month) {
            day = (
                <td>{date.getDate()}</td>
            );
        } else {
            day = (
                <td className="ui-datepicker-other-month">{date.getDate()}</td>
            );
        }
        return day;
    }

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{days[date.getDay()]}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                    <div className="ui-datepicker-material-month">{ofMonths[date.getMonth() + 1]}</div>
                    <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{months[date.getMonth() + 1]}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
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