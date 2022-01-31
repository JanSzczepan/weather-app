import './Result.css'
import React from 'react';

const Result = () => {
   return ( 
      <div className='result'>
         <div className='result__temp-box'>
            <h2 className='result__temp'>08°</h2>
         </div>
         <div className='result__weather-box'>
            <div className='result__place-time'>
               <h1 className='result__city'>London</h1>
               <p className='result__time'>
                  <span className='result__hours'>06:09</span>
                  <span className='result__sign'> - </span>
                  <span className='result__day'>Sunday</span>
                  <span className='result__sign'>, </span>
                  <span className='result__date'>6 Oct 19</span>
               </p>
            </div>
            <div className='result__weather'>
               <i className="result__weather-icon fas fa-cloud-showers-heavy"></i>
               <h5 className='result__weather-info'>rainy</h5>
            </div>
         </div>
      </div>
   );
}
 
export default Result;