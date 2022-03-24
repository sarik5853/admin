import React from 'react';
import {Link} from 'react-router-dom';

import './catalogmessage.css';


const CataloMessage = () => {
    return(
        <div className='catalogmessage container'>
            <div className='catalogmessage-wrapper'>
             <div className='catalogmessage-item'>
                <div className='catalogmessage-item-img'>
                <img src="../img/product.png" alt="asd"></img>
                </div>
                <Link to="/admin/editmessage" className='catalogmessage-link'><p>изменить</p></Link>
            </div>
            <div className='catalogmessage-item'>
                <div className='catalogmessage-item-img'>
                <img src="../img/product.png" alt="asd"></img>
                </div>
                <Link to="/admin/editmessage" className='catalogmessage-link'><p>изменить</p></Link>
            </div>
            </div>
        </div>
    )
}

export default CataloMessage;