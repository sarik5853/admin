import React from 'react';
import './addnews.css';
import '../admin/edit.css';

const AddNews = () => {
    return(
        <div className='panel'>
             <div className='edit container'>
        <h2>Добавить новость</h2>
        <form className='edit-wrapper'>
          <div className='edit-top'>
            <label className='edit-top-item'>
              Фото
              <input type="file"/>
            </label>
            <label className='edit-top-item'>
              Загаловок
              <input type='text' placeholder='Загаловок'/>
            </label>
            <label className='edit-top-item'>
              Описание
              <input type='text' placeholder='Описание'/>
            </label>
          </div>
          <button type='button' className='edit-link'>сохранить</button>
        </form>
      </div>
        </div>
    )
}

export default AddNews;