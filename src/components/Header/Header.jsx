import React from 'react';
import './Header.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, [])
  return (
    <div>
      <header className='Header'>
        <div data-aos='fade-right'>
          <span className='logo' >House Staff</span>
        </div>
        <nav data-aos='fade-left'>

          <ul>
            <li>Про нас</li>
            <li>Контакти</li>
            <li>Кабінет</li>
          </ul>
        </nav>

      </header>
      {/* <div className="presentation">
        <h1>Кращі товари для дому</h1>
        <p>за низькими цінами</p>
        <button>Переглянути</button>
      </div> */}
    </div>
  )
}
export default Header;
