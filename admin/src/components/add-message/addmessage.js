import React from 'react';

import '../add-product/addproduct.css'
import './addmessage.css';


const AddMessage = () => {
    return(
        <div className='add-message container'>
            <form className='add-message-wrapper'>
                <input type='file' placeholder='фото'/>
                <button className='add-product-link'>добавить</button>
            </form>
        </div>
    )
}

export default AddMessage;