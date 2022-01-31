import './Form.css';
import React from 'react';

const Form = () => {
   return (  
      <form className='form'>
         <input className='form__input' type="text" />
         <button className='form__btn' type='submit'><i className="form__icon fas fa-search"></i></button>
      </form>
   );
}
 
export default Form;