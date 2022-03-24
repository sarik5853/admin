import React from 'react';

import '../login/login.css';

const Registr = () => {
    return(
        <div className='login container'>
            <form className='login-wrapper'>
                <h3>Регистрация</h3>
                <input type='text' placeholder='логин'/>
                <input type='password' placeholder='пароль'/>  
                <button>зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Registr