import {
    MONTHS_NAMES,
    INDEX_DAY_WEEK,
    MAX_DAY_MONTH,
    CURRENT_DATE
} from './constants';

export const getTotalDaysMonth = (year = CURRENT_DATE.getFullYear(), month = CURRENT_DATE.getMonth()) => {
    return MAX_DAY_MONTH - new Date(year, month, MAX_DAY_MONTH).getDate();
}

export const getMonth = (month = CURRENT_DATE.getMonth()) =>{
    return MONTHS_NAMES[month];
}

export const getYear = () => CURRENT_DATE.getFullYear();

export const getFirstWeekDay = (year = CURRENT_DATE.getFullYear(), month = CURRENT_DATE.getMonth()) =>{
    return INDEX_DAY_WEEK[new Date(year, month).getDay()];
}
