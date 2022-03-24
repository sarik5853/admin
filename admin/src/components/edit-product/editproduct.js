import React from 'react';

import '../add-product/addproduct.css';

const EditProduct = () => {
    return(
        <div className='add-product container'>
            <form className='add-product-wrapper'>
                <div className='add-product-item-top'>
                   <label className='add-product-item'>
                    Название
                    <input type='text' placeholder='Назваание'/>
                </label>
                <label className='add-product-item'>
                Фото
                    <input type='file' placeholder='Назваание'/>
                </label>
                <label className='add-product-item'>
                Описание
                    <input type='text' placeholder='Описание'/>
                </label> 
                </div>
                <div className='add-product-item-center'>
                   <label className='add-product-item'>
                Тип одежды
                    <input type='text' placeholder='Тип одежды'/>
                </label>
                <label className='add-product-item'>
                Цена
                    <input type='num' placeholder='Цена'/>
                </label>
                <label className='add-product-item'>
                Цвет
                    <input type='text' placeholder='Цвет'/>
                </label> 
                </div>
                <div className='add-product-item-bottom'>
                Размеры
                <label className='add-product-size'>
                    <span>m</span>
                    <span>s</span>
                    <span>l</span>
                    <span>xl</span>
                    <span>xxl</span>
                </label> 
                </div>
                <button className='add-product-link'>изменить</button>
            </form>
        </div>
    )
}


export default EditProduct;