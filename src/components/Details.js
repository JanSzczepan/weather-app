import './Details.css';
import React from 'react';

const Details = () => {
   return (  
      <div className='details'>
         <h3 className='details__header'>Weather details</h3>
         <div className='details__info-box'>
            <div className="details__info">
               <p className="details__text-left">Cloudy</p>
               <p className="details__text-right">86%</p>
            </div>
            <div className="details__info">
               <p className="details__text-left">Humidity</p>
               <p className="details__text-right">62%</p>
            </div>
            <div className="details__info">
               <p className="details__text-left">Wind</p>
               <p className="details__text-right">8km/h</p>
            </div>
            <div className="details__info">
               <p className="details__text-left">Rain</p>
               <p className="details__text-right">8mm</p>
            </div>
         </div>
      </div>
   );
}
 
export default Details;