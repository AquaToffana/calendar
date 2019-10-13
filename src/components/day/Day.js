import React, {Component} from 'react';
import './day.scss';

class Day extends Component {

    render(){
        return(
            <div className="day">
                <div className="day__header">Sun, 13 Oct.</div>
                <div className="day__tasks">
                    <span>* Reunión de Estatus</span>  
                    <span>* Llamar a Iberdrola</span>  
                    <span>* Gym a las 20:00</span>  
                </div>
            </div>
        )
    };
}

export default Day;