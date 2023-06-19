const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 
const createArray = (length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(i);
    }
    return result;
};
const createData = function(){
    const current = new Date();
    current.setDate(1);
    //I assigned a const its wasnt there 
    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);
    
    const weeks = createArray(6);
    const days = createArray(7);
     let result = [] //value = null


    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        let value = {
            week: weekIndex + 1,
            days: []
        };
        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
            const day = (weekIndex * 7) + dayIndex - startDay + 1;
            const isValid = day > 0 && day <= daysInMonth;
            let classString = 'table__cell';
            if (dayIndex === 0 || dayIndex === 6) {
                classString += 'table__cell_weekend';
            }
             value.days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
                class: classString,
             });
            }
            weeks[weekIndex] = value;
        }
        return weeks;
};
const addCell = function(existing, classString, value) {
    return `${existing}<td class="${classString}">${value}</td>`;
};
const createHtml = function(data) {
    let result = '';
    for (let i = 0; i < data.length; i++) {
      const week = data[i];
      let inner = '';
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);
      for (let j = 0; j < week.days.length; j++) {
        const day = week.days[j];
        let classString = 'table__cell';
        const currentDate = new Date();
        const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();
        const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
        const isAlternate = week.week % 2 === 0;
        if (isToday) {
          classString = `${classString} table__cell_today`;
        }
        if (isWeekend) {
          classString = `${classString} table__cell_weekend`;
        }
        if (isAlternate) {
          classString = `${classString} table__cell_alternate`;
        }
        inner = addCell(inner, classString, day.value || '');
      }
      result += `<tr>${inner}</tr>`;
    }
    return result;
  };

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)