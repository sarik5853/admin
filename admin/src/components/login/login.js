import React from 'react';

import './login.css';

const Login = () => {
    return(
        <div className='login container'>
            <form className='login-wrapper'>
                <h3>Войти</h3>
                <input type='text' placeholder='логин'/>  
                <input type='num' placeholder='номер'/>  
                <input type='password' placeholder='пароль'/>  
                <button>войти</button>
            </form>
        </div>
    )
}

export default Login