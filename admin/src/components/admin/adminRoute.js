import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import 'antd/dist/antd.css';
import './admin.css';
import './edit.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;




const Admin = () => {
  return (
    <div className='amdin'>
      <div className='admin-nav'>
        <div className='admin-logo'>
          <img src="./img/logo.png" alt="logo"></img>
        </div>
        <div className='admin-search'>
          <input placeholder='search'/>
            <FaSearch/>
        </div>
        <FiSettings className='admin-nav-svg'/>
      </div>
      <div className='admin__wrapper'>
        <div className='admin-list'>
          <Collapse className='admin-list-wrapper' accordion>
            <Panel className='admin-list-link' header="Товары" key="1">
              <p>Добавить товар</p>
              <p>Редактировать товар</p>
            </Panel>
            <Panel className='admin-list-link' header="Новости" key="2">
              <p>Добавить новости</p>
              <p>Редактировать новости</p>
            </Panel>
            <Panel className='admin-list-link' header="Отзывы" key="3">
              <p>Добавить отзывы</p>
              <p>Редактировать отзывы</p>
            </Panel>
            <Panel className='admin-list-link' header="Заказы" key="4">
              <p>Панель заказов</p>
            </Panel>
          </Collapse>
        </div>
        <div className='admin-content'>
            
        </div>  
      </div>
    </div>
      
  );
}

export default Admin;