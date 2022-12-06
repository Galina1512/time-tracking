import { React, useState } from 'react';
import './App.css';
import HandlerDaily from './HandlerDaily';
import HandlerWeekly from './HandlerWeekly';
import HandlerMonthly from './HandlerMonthly'
import portret from './image-jeremy.png';

function App() {

    const [isDaily, setIsDaily] = useState(false);
    const [isWeekly, setIsWeekly] = useState(true);
    const [isMonth, setIsMonth] = useState(false);

    const [activeBtn1, setActiveBtn1] = useState(false);
    const [activeBtn2, setActiveBtn2] = useState(true);
    const [activeBtn3, setActiveBtn3] = useState(false);
  

    function weeks() {
      setIsWeekly(true); 
      setIsDaily(false);
      setIsMonth(false);
      setActiveBtn1(false);
      setActiveBtn2(true);
      setActiveBtn3(false);
  
      }

      function days(){
        setIsDaily(true);
        setIsWeekly(false); 
        setIsMonth(false);
        setActiveBtn1(true);
        setActiveBtn2(false);
        setActiveBtn3(false);
    
        }
     
      function months(){
        setIsMonth(true);
        setIsDaily(false);
        setIsWeekly(false);
        setActiveBtn1(false);
        setActiveBtn2(false);
        setActiveBtn3(true);
     
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
        <button onClick={ days } className={activeBtn1 ? " btn1 active" : "btn1"}  >Daily</button>
        <button onClick={ weeks } className={activeBtn2 ?  " btn2 active" : "btn2"}  >Weekly</button>
        <button onClick = { months } className={activeBtn3 ? " btn3 active" : "btn3"} >Monthly</button>
      </div>

    </header>

  <div className='rightblock'>
    <div className={isDaily ? 'isDaily' : null}  >      
      {isDaily? <HandlerDaily/> : null};
    </div>

    <div className={isWeekly ? 'isWeekly' : null} >
      {isWeekly ? <HandlerWeekly/> : null}
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