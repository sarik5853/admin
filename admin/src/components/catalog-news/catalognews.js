import React from 'react';
import {Link} from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import './catalognews.css';

const CatalogNews = () => {
    return(
        <div className='catalog-news container'>
            <div className='news-bottom'>
                <div className="news-bottom__item">
                    <div className="news-item__left">
                        <img src="../img/product.png" alt="sdf"></img>
                    </div>
                    <div className="news-item__right">
                        <ul className="news-item__time">
                            <li><BsFillCalendarEventFill/></li>
                            <li>01.02.2022</li>
                            <li>время</li>
                            <li>16:04</li>
                        </ul>
                        <div className="news-item__right-text">
                            <h4>Новая колекция от Dior</h4>
                            <p>Платье на самой стройной части туловища.Платье на самой стройной части туловища. Но не только эти</p>
                            <Link to="/admin/editnews">изменить<FiArrowRight/></Link>
                        </div>
                    </div>
                </div>
                <div className="news-bottom__item">
                    <div className="news-item__left">
                        <img src="../img/product.png" alt="sdf"></img>
                    </div>
                    <div className="news-item__right">
                        <ul className="news-item__time">
                            <li><BsFillCalendarEventFill/></li>
                            <li>01.02.2022</li>
                            <li>время</li>
                            <li>16:04</li>
                        </ul>
                        <div className="news-item__right-text">
                            <h4>Новая колекция от Dior</h4>
                            <p>Платье на самой стройной части туловища.Платье на самой стройной части туловища. Но не только эти</p>
                            <Link to="/admin/editnews">изменить<FiArrowRight/></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CatalogNews;