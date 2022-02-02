import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <>
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
                <img src='../../assets/images/btc.svg' alt='btc'/>
                <img src='../../assets/images/ethereum.svg' alt='ethereum'/>
                <img src='../../assets/images/visa.svg' alt='visa'/>
                <img src='../../assets/images/mastercard.svg' alt='mastercard'/>
            </div>
        </footer>
        <div className='fot'>
        <div className='fot-left'>
            <a href=''>Часто задаваемые вопросы</a>
            <div>
                © 2021, Все права защищены.
            </div>
        </div>
        <div className='fot-mid'>
            <img src='' alt='' />
            <div> Вернуться Наверх</div>
        </div>
        <div className='fot-right'>
            <a target="_blank" href="/terms/terms-conditions">Условия использования</a>
            &nbsp; • &nbsp;
            <a target="_blank" href="/terms/privacy-statement">Заявление о конфиденциальности</a>
        </div>

    </div>
    </>
    );
};

export default Footer;