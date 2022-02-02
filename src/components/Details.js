import './Details.css';
import React from 'react';

const Details = (props) => {
   const {weather, cloudy, humidity, wind, rain, snow} = props.weatherData;
   let fallName = '';
   let fallInfo = '';
   let fallContent = '';
   let textLeftClass = 'details__text-left';

   if(rain) {
      fallName = 'Rain';
      fallInfo = rain;
   }
   else if(snow) {
      fallName = 'Snow';
      fallInfo = snow;
   }

   if(fallInfo) fallContent = (
      <div className="details__info">
         <p className="details__text-left">{fallName}</p>
         <p className="details__text-right">{fallInfo}mm</p>
      </div>
   )

   if(weather === 'Clear') 
      textLeftClass = 'details__text-left details__text-left--sun';

   return (  
      <div className='details'>
         <h3 className='details__header'>Weather details</h3>
         <div className='details__info-box'>
            <div className="details__info">
               <p className={textLeftClass}>Cloudy</p>
               <p className="details__text-right">{cloudy}%</p>
            </div>
            <div className="details__info">
               <p className={textLeftClass}>Humidity</p>
               <p className="details__text-right">{humidity}%</p>
            </div>
            <div className="details__info">
               <p className={textLeftClass}>Wind</p>
               <p className="details__text-right">{wind}km/h</p>
            </div>
            {fallContent ? fallContent : null}
         </div>
      </div>
   );
}
 
export default Details;