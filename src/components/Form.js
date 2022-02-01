import './Form.css';
import React from 'react';

const Form = props => {
   return (  
      <form className='form' onSubmit={props.submit}>
         <input 
            className='form__input' 
            type='text'
            value={props.value}
            onChange={props.change}
            placeholder='Type city...' />
         <button className='form__btn' type='submit'><i className="form__icon fas fa-search"></i></button>
      </form>
   );
}
 
export default Form;