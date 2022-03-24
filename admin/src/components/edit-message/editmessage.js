import React from 'react';

import '../add-product/addproduct.css'
import '../add-message/addmessage.css';


const EditMessage = () => {
    return(
        <div className='add-message container'>
            <form className='add-message-wrapper'>
                <input type='file' placeholder='фото'/>
                <button className='add-product-link'>изменить</button>
            </form>
        </div>
    )
}

export default EditMessage;