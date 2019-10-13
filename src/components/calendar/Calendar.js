import React, {Component, Fragment} from 'react';
import * as calendar from  './utils/calendar.js';
import {DAYS_WEEK, CURRENT_DATE} from './utils/constants';
import './calendar.scss';

const renderEmptys = (total) => {
    const emptyDays = [];
    for(let i = 0; i < total; i++){
        emptyDays.push(<td></td>);
    }
    return emptyDays;
}

class Calendar extends Component {

    state = {
        selectedMonth: CURRENT_DATE.getMonth(),
        currentDay: CURRENT_DATE.getDate(),
        currentMonth: CURRENT_DATE.getMonth(),
        currentYear: CURRENT_DATE.getMonth(),
        selectedYear: CURRENT_DATE.getFullYear()
    }

    componentWillMount(){
        this.handleOnClick = this.handleOnClick.bind(this);
    }


    handleOnClick(e, option){
        const {selectedMonth} = this.state;

        const newSelectedMonth = selectedMonth + option;

        this.setState({
            selectedMonth: newSelectedMonth
        });
    }

    renderMonthName(){
        const {selectedMonth, selectedYear} = this.state;
        return (
            <div className="header">
                <div className="header__buttons">
                    <button type="button"   onClick={ (e) => this.handleOnClick(e, -1)}>{'<'}</button>
                    <button type="button"  onClick={(e) => this.handleOnClick(e, +1)}>{'>'}</button>
                </div>
                <div className="header__month">
                    <span className="month">{`${calendar.getMonth(selectedMonth)}, ${calendar.getYear(selectedYear)}`}</span>
                </div>
            </div>
        )
    }

    renderDayNames(){
        return(
            <tr className="dayWeek">
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
            </tr>
        );
    }

    renderDay(day){
        const {currentDay, currentMonth, selectedMonth} = this.state; 
        if(currentDay === day && currentMonth === selectedMonth){
            return (
                <td> 
                    <div className="currentDay">{day}</div>
                </td>
            );
        }

        return (
            <td>
                <div>{day}</div>
            </td>
        )
    }

    renderDayMonth(){
        const {selectedYear, selectedMonth, currentDay} = this.state;
        const startDay = calendar.getFirstWeekDay(selectedYear, selectedMonth);
        const maxDays = calendar.getTotalDaysMonth(selectedYear, selectedMonth);
        let day = 1;
        const daysOnFirstWeek = DAYS_WEEK - startDay;

        const renderDays = (total = DAYS_WEEK) =>{
            const days = [];

            for(let i = 0; i < total; i++){
                if(day <= maxDays){
                    days.push (
                        this.renderDay(day)
                    );
                    day ++;
                } else{
                    days.push(<td></td>);
                }
            }

            return days;
        }


        const renderMiddleWeeks = (weeks) => {
            const middleWeeks = [];
            for(let i = 0; i <= Math.trunc(weeks); i++){
                middleWeeks.push(
                    <tr className="dayMonth">
                        {renderDays()}
                    </tr>
                );
            }

            return middleWeeks;
        }
    
        return (
            <Fragment>
                <tr className="dayMonth">
                    {renderEmptys(startDay)}
                    {renderDays(daysOnFirstWeek)}
                </tr>
                {renderMiddleWeeks((maxDays - day) / DAYS_WEEK)}
                
            </Fragment>
        )
    }

    render(){
        return(
            <div className="calendar">
                {this.renderMonthName()}
                <table>
                    <tbody>
                {this.renderDayNames()}
                {this.renderDayMonth()}
                    </tbody>
                </table>
                
            </div>
        )
    };
}

export default Calendar;