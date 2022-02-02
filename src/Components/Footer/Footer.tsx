import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='ft-top'>
                <div className='ft-top-left'></div>
                <div className='ft-top-mid'>
                    <img src='../../assets/images/mima-logo.png' alt='mima-logo'/>
                </div>
                <div className='ft-top-right'>
                    <div className='address'>112 Bonadie Street, P.O Box 613, Kingstown, St. Vincent</div>
                    <div className='contact'>
                        <img src='../../assets/images/mail.svg' alt='icon' />
                        <a href="mailto:support@mima-poker.cc">support@mima-poker.cc</a>
                    </div>
                    <div className='soc-media'>
                        <a href='https://www.facebook.com/MiMaLivePoker/'>
                            <img src='../../assets/images/facebook.svg' alt='fb-icon' />
                        </a>
                        <a href='https://www.instagram.com/mima_live_poker/'>
                        <img src='../../assets/images/instagram.svg' alt='insta-icon' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='ft-mid'>
                <a href=''>Безопасность</a>
                <a href=''>Депозит, снятие и возврат</a>
                <a href=''>Возраст и личность</a>
                <a href=''>AML</a>
                <a href=''>Ответственная игра</a>
                <a href=''>Cookies</a>
                <a href=''>Корпоративные ценности</a>
            </div>
            <div className='ft-bottom'>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
                <img src='' alt=''/>
            </div>
        </footer>
    );
};

export default Footer;