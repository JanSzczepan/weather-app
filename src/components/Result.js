import './Result.css'
import React from 'react';

const Result = (props) => {
   const {date, city, weather, temp, icon, err} = props.weatherData;
   let content = '';

   if(!err && city) {
      const iconClass = `result__weather-icon ${icon}`
      content = (
         <>
            <div className='result__temp-box'>
               <h2 className='result__temp'>{temp.toFixed(1)}°</h2>
            </div>
            <div className='result__weather-box'>
               <div className='result__place-time'>
                  <h1 className='result__city'>{city}</h1>
                  <p className='result__time'>
                     <span className='result__hours'>{date.hours}:{date.minutes}</span>
                     <span className='result__sign'> - </span>
                     <span className='result__day'>{date.day}</span>
                     <span className='result__sign'>, </span>
                     <span className='result__date'>{date.date} {date.month} {date.year}</span>
                  </p>
               </div>
               <div className='result__weather'>
                  <i className={iconClass}></i>
                  <h5 className='result__weather-info'>{weather}</h5>
               </div>
            </div>
         </>
      )
   } else if(err && city) {
      content = (
         <div className="result__notfound-box">
            <i className="result__notfound-icon fas fa-plane-slash"></i>
            <p className="result__notfound-text">Nie mamy w bazie<br/><strong className='result__notfound-textstrong'>{city}</strong>...</p>
         </div>
      )
   }

   return ( 
      <div className='result'>
         {content}
      </div>
   );
}
 
export default Result;