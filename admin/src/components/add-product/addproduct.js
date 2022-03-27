import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import './addproduct.css';

const AddProduct = () => {
    return(
        <div className='add-product container'>
            <form className='add-product-wrapper'>
            <h1>Добавить товар</h1>
                <div className='add-photo-wrapper'>
                    <label className='add-product-item'>
                    Фото
                    <input type='file'/>
                    <button>добавить</button>
                    </label>
                    <div className='add-photo-item'>
                        <div className='add-photo'>
                            <p>phasxaoto</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>photascascascascao</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>photxasxasxasxo</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>photasxasxaso</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>phoxasxasxto</p>
                            <MdOutlineCancel/>
                        </div>
                    </div>
                    
                </div>
                <div className='add-photo-wrapper'>
                    <label className='add-product-item'>
                    Размер
                    <input type='text' placeholder='размер:'/>
                    <button>добавить</button>
                    </label>
                    <div className='add-photo-item'>
                        <div className='add-photo'>
                            <p>xxxl</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>s</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>m</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>xl</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>xxl</p>
                            <MdOutlineCancel/>
                        </div>
                    </div>
                    
                </div>
                <div className='add-photo-wrapper'>
                    <label className='add-product-item'>
                    Цвет
                    <input type='text' placeholder='Цвет'/>
                    <button>добавить</button>
                    </label>
                    <div className='add-photo-item'>
                        <div className='add-photo'>
                            <p>красный</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>синий</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>оранжевый</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>фиолетовый</p>
                            <MdOutlineCancel/>
                        </div>
                        <div className='add-photo'>
                            <p>молочный</p>
                            <MdOutlineCancel/>
                        </div>
                    </div>
                    
                </div>
                {/* <div className='add-product-item-top'>
                   <label className='add-product-item'>
                    Название
                    <input type='text' placeholder='Назваание'/>
                </label>
                <label className='add-product-item'>
                Цена
                    <input type='num' placeholder='Цена'/>
                </label>
                <label className='add-product-item'>
                Описание
                    <input type='text' placeholder='Описание'/>
                </label> 
                </div> */}
                {/* <div className='add-product-item-center'>
                   <label className='add-product-item'>
                Тип одежды
                    <input type='text' placeholder='Тип одежды'/>
                </label>
                </div> */}
                <div className='add-product-item-wrapper'>
                    <div className='add-product-item-left'>
                        <label className='add-product-item'>
                            Название
                            <input type='text'  placeholder='Назваание'/>
                        </label>
                            <label className='add-product-item'>
                            Тип одежды
                            <input type='text' placeholder='Типодежды'/>
                        </label>
                        <label className='add-product-item'>
                            Цена
                            <input type='num' placeholder='Цена'/>
                        </label>
                    </div>
                    <div className='add-product-item-right'>
                        <label className='add-product-item'>
                            Описание
                            <textarea type='text' placeholder='Описание'/>
                        </label> 
                    </div>
                </div>
                <button className='add-product-link'>добавить</button>
            <button className='add-product-link'>удолить</button>
            </form>
        </div>
    )
}


export default AddProduct;