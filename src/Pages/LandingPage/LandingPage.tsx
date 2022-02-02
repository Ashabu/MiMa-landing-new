import React from 'react';
import AppInput from '../../Components/AppInput/AppInput';
import Footer from '../../Components/Footer/Footer';
import GameBox from '../../Components/GameBox/GameBox';
import useForm from '../../hooks/useForm';
import validateInfo from '../../hooks/validateInfo';
import './landingPage.css';


const LandingPage = () => {
    const {handleChange, handleSubmit, values, errors} = useForm(validateInfo);

    console.log('errors', Object.keys(errors).length)
  

    return (
        <div style={{ maxWidth: 1920, margin: '0px auto', backgroundColor: '#000000' }}>
            <div className='main-section'>
                <header>
                    <img src='../../assets/images/mima-logo.png' alt='img' />
                    <p>Зарегистрируйся</p>
                </header>
                <div className='main-right'>
                    <div className='promo-title'>
                        <h1>WELCOME CHIPS</h1>
                        <h3>Получите  <span>10 долларов </span> в подарок <br /> <span>При регистрации</span></h3>
                    </div>
                    <div className='input-wrap'>
                        <AppInput
                            value={values.username}
                            labelname={'имя  пользователя'}
                            name={'username'}
                            onChange={handleChange} 
                            inputerror = {errors.username}/>
                        <AppInput
                            value={values.email}
                            labelname={'электронная  почта'}
                            name={'email'}
                            onChange={handleChange}
                            inputerror = {errors.email}
                        />
                        <AppInput labelname={'Дата'} />
                        <AppInput
                            value={values.password}
                            labelname={'пароль'}
                            name={'password'}
                            onChange={handleChange}
                            inputerror = {errors.password}
                        />
                        <AppInput
                            value={values.confirmPassword}
                            labelname={'повторный  пароль'}
                            name={'confirmPassword'}
                            onChange={handleChange} 
                            inputerror = {errors.confirmPassword}
                            />
                    </div>
                    <button className='reg-button' onClick={handleSubmit}>Зарегистрируйся</button>
                </div>
            </div>
            <div className='second-section'>
                <p> Ваше место за столом ждет </p>
                <div className='separator' >
                    <div className='circle-wrap'>
                        <div className='circle'>
                            <span>1</span>
                            <span>Зарегистрируйте аккаунт</span>
                        </div>
                        <div className='circle'>
                            <span>2</span>
                            <span>Пройдите верификацию <br /> электронной почты</span>
                        </div>
                        <div className='circle'>
                            <span>3</span>
                            <span>Получите $10 <br />в подарок</span>
                        </div>
                    </div>
                </div>
                <p style={{ fontSize: 20, marginTop: 138, marginBottom: 60 }}> За нашими покерными столами вас ждет увлекательная игра</p>
                <div className='rooms-wrap'>
                    <div className='rooms-header'>
                        <img src='../../assets/images/cards.png' alt='icon' />
                        <p>Rooms</p>
                        <img src='../../assets/images/live-icon.png' alt='icon' />
                    </div>
                    <div className='rooms'>
                        <GameBox />
                        <GameBox />
                        <GameBox />
                        <GameBox />
                        <GameBox />
                        <GameBox />
                    </div>
                </div>
                <Footer />
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
            </div>
        </div>
    );
};

export default LandingPage;