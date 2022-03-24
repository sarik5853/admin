import React, {useState} from 'react';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';

import './panel.css';
import '../admin/edit.css';

const AdminPanel = () => {
  const [settingShow, setSettingShow] = useState(false);

  const settingShowStyle = settingShow ? "panel-item-edit panel-item-edit-active" : "panel-item-edit ";
    return(
      <div className='panel'>
        <div className='panel-titles'>
          <div className='panel-titles-wrapper'>

        <AiOutlineFieldNumber/>
          <div className='panel-titles-name'>имя</div>
          <div className='panel-titles-num'>номер</div>
          <div className='panel-titles-one'>товар</div>
          <div className='panel-titles-one'>цвет</div>
          <div className='panel-titles-one'>размер</div>
          <div className='panel-titles-one'>количество</div>
          <div className='panel-titles-one'>сумма</div>
          <div className='panel-titles-adres'>адрес</div>
        </div>
          </div>
        <div className='panel-wrapper'>
        <div className='panel-item'>
            <div className='panel-item-list 'onClick={() => setSettingShow(!settingShow)}>
              <p>1</p>
              <div className='panel-titles-name'>Andrew Bojangels</div>
              <div className='panel-titles-num'>+998909999999</div>
              <div className='panel-titles-one'>платье</div>
              <div className='panel-titles-one'>белый</div>
              <div className='panel-titles-one'>xl</div>
              <div className='panel-titles-one'>5</div>
              <div className='panel-titles-one'>500.000 сум</div>
              <div className='panel-titles-adres'>шайхантохур дом 1</div>
              <div className='panel-item-list-svg'>
            <FiMoreVertical onClick={() => setSettingShow(!settingShow)}/>
            <div className={settingShowStyle}>
              <button>принять</button>
              <span></span>
              <button>удолить</button>
            </div>
              </div>
            </div>
          </div>
          <div className='panel-item'>
            <div className='panel-item-list 'onClick={() => setSettingShow(!settingShow)}>
              <p>2</p>
              <div className='panel-titles-name'>Andrew Bojangels</div>
              <div className='panel-titles-num'>+998909999999</div>
              <div className='panel-titles-one'>платье</div>
              <div className='panel-titles-one'>белый</div>
              <div className='panel-titles-one'>xl</div>
              <div className='panel-titles-one'>5</div>
              <div className='panel-titles-one'>500.000 сум</div>
              <div className='panel-titles-adres'>шайхантохур дом 1</div>
              <div className='panel-item-list-svg'>
            <FiMoreVertical onClick={() => setSettingShow(!settingShow)}/>
            <div className={settingShowStyle}>
              <button>принять</button>
              <span></span>
              <button>удолить</button>
            </div>
              </div>
            </div>
          </div>
          <div className='panel-item'>
            <div className='panel-item-list 'onClick={() => setSettingShow(!settingShow)}>
              <p>3</p>
              <div className='panel-titles-name'>Andrew Bojangels</div>
              <div className='panel-titles-num'>+998909999999</div>
              <div className='panel-titles-one'>платье</div>
              <div className='panel-titles-one'>белый</div>
              <div className='panel-titles-one'>xl</div>
              <div className='panel-titles-one'>5</div>
              <div className='panel-titles-one'>500.000 сум</div>
              <div className='panel-titles-adres'>шайхантохур дом 1</div>
              <div className='panel-item-list-svg'>
            <FiMoreVertical onClick={() => setSettingShow(!settingShow)}/>
            <div className={settingShowStyle}>
              <button>принять</button>
              <span></span>
              <button>удолить</button>
            </div>
              </div>
            </div>
          </div>
          <div className='panel-item'>
            <div className='panel-item-list 'onClick={() => setSettingShow(!settingShow)}>
              <p>4</p>
              <div className='panel-titles-name'>Andrew Bojangels</div>
              <div className='panel-titles-num'>+998909999999</div>
              <div className='panel-titles-one'>платье</div>
              <div className='panel-titles-one'>белый</div>
              <div className='panel-titles-one'>xl</div>
              <div className='panel-titles-one'>5</div>
              <div className='panel-titles-one'>500.000 сум</div>
              <div className='panel-titles-adres'>шайхантохур дом 1</div>
              <div className='panel-item-list-svg'>
            <FiMoreVertical onClick={() => setSettingShow(!settingShow)}/>
            <div className={settingShowStyle}>
              <button>принять</button>
              <span></span>
              <button>удолить</button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AdminPanel