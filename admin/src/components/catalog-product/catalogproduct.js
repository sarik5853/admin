import React from 'react';
import {Link} from 'react-router-dom';
import './catalogproduct.css';

const CatalogProduct = () => {
    return(
        <div className='catalog-product container'> 
            <div className="product__item phpr">
                    <div className="product__item-img">
                        <img src="../img/product.png" alt="product"></img>
                    </div>
                    <div className="product__item-text">
                        <h4>Водолазка</h4>
                        <p>Ручной стежок из хлопка высокого качества без швов Salwar Kamiz</p>
                    </div>
                    <ul className="edit-price">
                                <li>$12.00</li>
                                <li className="edit-sale">$15.00</li>
                            </ul>
                    <div className="product__item-link edit-product-link"> 
                        <Link to="/admin/editproduct">изменить</Link>
                    </div>
                </div>
                <div className="product__item phpr">
                    <div className="product__item-img">
                        <img src="../img/product.png" alt="product"></img>
                    </div>
                    <div className="product__item-text">
                        <h4>Водолазка</h4>
                        <p>Ручной стежок из хлопка высокого качества без швов Salwar Kamiz</p>
                    </div>
                    <ul className="edit-price">
                                <li>$12.00</li>
                                <li className="edit-sale">$15.00</li>
                            </ul>
                    <div className="product__item-link edit-product-link"> 
                        <Link to="/admin/editproduct">изменить</Link>
                    </div>
                </div>
                <div className="product__item phpr">
                    <div className="product__item-img">
                        <img src="../img/product.png" alt="product"></img>
                    </div>
                    <div className="product__item-text">
                        <h4>Водолазка</h4>
                        <p>Ручной стежок из хлопка высокого качества без швов Salwar Kamiz</p>
                    </div>
                    <ul className="edit-price">
                                <li>$12.00</li>
                                <li className="edit-sale">$15.00</li>
                            </ul>
                    <div className="product__item-link edit-product-link"> 
                        <Link to="/admin/editproduct">изменить</Link>
                    </div>
                </div>
                <div className="product__item phpr">
                    <div className="product__item-img">
                        <img src="../img/product.png" alt="product"></img>
                    </div>
                    <div className="product__item-text">
                        <h4>Водолазка</h4>
                        <p>Ручной стежок из хлопка высокого качества без швов Salwar Kamiz</p>
                    </div>
                    <ul className="edit-price">
                                <li>$12.00</li>
                                <li className="edit-sale">$15.00</li>
                            </ul>
                    <div className="product__item-link edit-product-link"> 
                        <Link to="/admin/editproduct">изменить</Link>
                    </div>
                </div>
        </div>
    )
}


export default CatalogProduct;