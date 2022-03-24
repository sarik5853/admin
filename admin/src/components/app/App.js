import './App.css';
import {useState} from 'react';
import { Collapse } from 'antd';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import AddNews from '../add-news';
import CatalogNews from '../catalog-news';
import AdminPanel from '../panel';
import EditNews from '../edit-news';
import { FaSearch } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import 'antd/dist/antd.css';
import '../admin/admin.css';
import '../admin/edit.css';
import AddProduct from '../add-product';
import EditProduct from '../edit-product';
import CatalogProduct from '../catalog-product';
import AddMessage from '../add-message';
import EditMessage from '../edit-message';
import CataloMessage from '../catalog-message';



function App() {
  const { Panel } = Collapse;
//   function callback(key) {
//     console.log(key);
//   }
// const { Panel } = Collapse;

  const [setShow, setSetShow] = useState(false);
  // const [listerShow, setListerShow] = useState(false);

  // const setListerStyle = listerShow ? "admin-list-list admin-list-list-active" : "admin-list-list ";

    const setShowStyle = setShow ? "admin-list admin-list-active" : "admin-list ";


  return (
    <div className='amdin'>
      <div className='admin-nav'>
        <div className='admin-logo'>
          <img src="../img/logo.png" alt="logo"></img>
        </div>
        <div className='admin-search'>
          <input placeholder='search'/>
            <FaSearch/>
        </div>
        <FiSettings className='admin-nav-svg' onClick={() => setSetShow(!setShow)}/>
      </div>
      <div className='admin__wrapper'>
        <div className={setShowStyle}>
          {/* <ul className='admin-list-wrapper' >
            <li onClick={() => setListerShow(!listerShow)}>
              adsadas
              <ul className={setListerStyle} >
                <Link to="/admin/editnews"><li>редактировать товар</li></Link>
                <li>добавить товар</li>
              </ul>
            </li>

          </ul> */}
          <Collapse className='admin-list-wrapper' accordion>
            <Panel className='admin-list-link' header="Товары" key="1">
              <Link to="/admin/catalogproduct"><p>редактировать товар</p></Link>
              <Link to="/admin/addproduct"><p>добавить товар</p></Link>
            </Panel>
            <Panel className='admin-list-link' header="Новости" key="2">
            <Link to="/admin/addnews"><p>Добавить новости</p></Link>
            <Link to="/admin/catalognews"><p>Редактировать новости</p></Link>
            </Panel>
            <Panel className='admin-list-link' header="Отзывы" key="3">
            <Link to="/admin/addmessage"><p>Добавить отзывы</p></Link>
            <Link to="/admin/catalogmessage"><p>Редактировать отзывы</p></Link>
            </Panel>
            <Panel className='admin-list-link' header="Заказы" key="4">
            <Link to="/admin"><p>Панель заказов</p></Link>
            </Panel>
          </Collapse>
        </div>
        <div className='admin-content'>
        <Routes>
          <Route path="/admin" element={<AdminPanel/>}/>
          <Route path="/admin/addnews" element={<AddNews/>}/>
          <Route path="/admin/editnews" element={<EditNews/>}/>
          <Route path="/admin/catalognews" element={<CatalogNews/>}/>
          <Route path="/admin/addproduct" element={<AddProduct/>}/>
          <Route path="/admin/editproduct" element={<EditProduct/>}/>
          <Route path="/admin/catalogproduct" element={<CatalogProduct/>}/>
          <Route path="/admin/addmessage" element={<AddMessage/>}/>
          <Route path="/admin/editmessage" element={<EditMessage/>}/>
          <Route path="/admin/catalogmessage" element={<CataloMessage/>}/>
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
        </div>  
      </div>
    </div>
  );
}

export default App;
