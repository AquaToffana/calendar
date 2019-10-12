import React, {Component} from 'react';

class Calendar extends Component {

    renderMonthName(){
        return <span>October</span>
    }

    renderDayNames(){
        return(
            <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>
        )
    }

    render(){
        return(
            <div>
                {this.renderMonthName()}
                {this.renderDayNames()}
            </div>
        )
    };
}

export default Calendar;