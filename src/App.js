import React from 'react';
import Calendar from './components/calendar/Calendar';
import Day from './components/day/Day';
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="App__calendar">
        <Calendar/>
      </div>
      <div className="App__day">
        <Day />
      </div>
    </div>
  );
}

export default App;
