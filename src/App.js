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

    function weeks() {
      {setIsWeekly(!isWeekly)}; 
      {setIsDaily(false)};
      { setIsMonth(false)};
      }

      function days(){
        {setIsDaily(!isDaily)};
        {setIsWeekly(true)}; 
        { setIsMonth(false)};
        }
     
      function months(){
        { setIsMonth(!isMonth)};
        {setIsDaily(false)};
        {setIsWeekly(true)}; 
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
        <button onClick={ days } className="btn" >Daily</button>
        <button onClick={ weeks } className="btn" >Weekly</button>
        <button onClick = { months } className="btn">Monthly</button>
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
