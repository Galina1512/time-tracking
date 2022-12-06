import { React, useState } from 'react';
import './App.css';
import HandlerDaily from './HandlerDaily';
import HandlerWeekly from './HandlerWeekly';
import HandlerMonthly from './HandlerMonthly'
import portret from './image-jeremy.png';

function App() {

    const [isDaily, setIsDaily] = useState(false);
    const [isWeekly, setIsWeekly] = useState(false);
    const [isMonth, setIsMonth] = useState(false);

    const [selected, setSelected] = useState("weekly")

    const buttons = [{value: "day", label: "Daily"}, {value: "week", label: "Weekly"}, {value: "month", label: "Monthly"} ]

    function visible(){
    // setSelected({value})
    if (setSelected(value) === "week") {
      {setIsWeekly(!isWeekly)}; 
      {setIsDaily(false)};
      {setIsMonth(false)};
      }
    else if (setSelected(value) === "day") {
        {setIsDaily(!isDaily)};
        {setIsWeekly(true)}; 
        {setIsMonth(false)};
        }
     
    else if (setSelected(value) === "month") {
          {setIsMonth(!isMonth)};
        {setIsDaily(false)};
        {setIsWeekly(true)}; 
        }
      }

  return (
    <div className='fon'>
  <div className='main'>
    <header className="leftblock">

      <div className='person'>
        <img src={portret} className="portret" alt='face' />
        <div className='yourname'>
        <p>Report for</p>
        <h3>Jeremy
        Robson</h3>
        </div>
      </div>

      <div className='mymenu'>
            {buttons.map(({value, label, index}) => (

            <button key={index}
            className={`${selected  === value ? "btn1" : "btn"} `}
            onClick={() => setSelected(value)}>
           {/* onClick={ visible()}> */}

            {label}
          
            </button>

            ))}
      </div>
    </header>

  <div className='rightblock'>
    <div className={isDaily ? 'isDaily' : null}  >      
      {isDaily? <HandlerDaily/> : null};
    </div>

    <div className={isWeekly ? 'isWeekly' : null} >
      {isWeekly ? null :<HandlerWeekly/>}
    </div>

    <div className={isMonth ? 'isMonth' : null} >
      {isMonth ? <HandlerMonthly/> : null}
    </div>
  </div>
    </div>
    </div>
  );
}


export default App;
