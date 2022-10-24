import { React } from 'react';
import './App.css';
import data from './data';
import ellips from './icon-ellipsis.svg';

function HandlerWeekly() {

  return (
    <div className="App">
{data.map((item, index) =>{
  const {title, timeframes, colorit, image} = item;
  const divStyle = {
    backgroundColor: {colorit}
  }
  console.log(colorit)
  return(
    <div className='substrate' key={index} style= {divStyle} >
      <img src={image} alt='pic'/>

    <div className='card' style= {divStyle}>
    <div className='card-title'>
      <h3>{title}</h3>
      <img src={ellips} alt='pict'/>
    </div>
    <div className='card-text'>
      <h1>{timeframes.weekly.current}hrs </h1>
      <h4> Last week - {timeframes.weekly.previous}hrs </h4>
    </div>
    </div>
  </div>
  )
})}
    </div>
  )
}

export default HandlerWeekly;
