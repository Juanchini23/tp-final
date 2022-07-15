import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './styles.scss';
import HyperModal from 'react-hyper-modal';
import Header from '../../components/header';
import ensalada from '../../assets/img/ensalada.png';
import peso from '../../assets/img/peso.png';
import Footer from '../../components/footer';
import cambioUno from '../../assets/img/cambioUno.jpeg';
import cambioDos from '../../assets/img/cambioDos.jpeg';
import cambioTres from '../../assets/img/cambioTres.jpeg';
import cambioCuatro from '../../assets/img/cambioCuatro.jpeg';
import imguno from '../../assets/img/bannerOne.png';
import imgdos from '../../assets/img/bannerTwo.png';
import flechaiz from '../../assets/img/flecha-izquierda.png';
import flechade from '../../assets/img/flecha-derecha.png';
import grafico from '../../assets/img/cardi.png';
import imgtres from '../../assets/img/bannerTres.png';

SwiperCore.use([Autoplay, Navigation]);

export default function ListExample() {
  const [checked, setChecked] = useState(false);
  const [button, setButton] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [heigth, setHeigth] = useState('');
  const [weigth, setWeigth] = useState('');
  const [vegan, setVegan] = useState(false);
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');

  return (
    <>
      <Header />
      <div className="line-div" />
      <div className="home-page">
        <div className="content-gral">
          <div className="first-heading">
            <h2 className="title-page">
              <span>ENTRENO</span>
              , LUEGO EXISTO
            </h2>
            <h3 className="cambiar-estado-fisico">
              ¿Querés cambiar tu
              {' '}
              <span>estado fisico?</span>
            </h3>
            <div className="cambio-fisico-imagenes">
              <div className="cambio-fisico">
                <div className="span-image">
                  <span>Antes</span>
                  <img src={cambioUno} alt="img" />
                </div>
                <div className="span-image">
                  <span>Despues</span>
                  <img src={cambioDos} alt="img" />
                </div>
              </div>
              <div className="cambio-fisico">
                <div className="span-image">
                  <span>Antes</span>
                  <img src={cambioTres} alt="img" />
                </div>
                <div className="span-image">
                  <span>Despues</span>
                  <img src={cambioCuatro} alt="img" />
                </div>
              </div>
            </div>
            <div className="modal">
              <button
                title="open"
                type="button"
                className="btn-gral"
                position="center"
              >
                <a href="#formulario">Comenzar</a>

              </button>
            </div>
          </div>
          <div className="target-container">
            <div className="taget">
              <img src={peso} alt="asd" />
              <h3>Entrenamiento</h3>
              <p>Entrenamientos personalizados para todxs y rutinas semanales.</p>
            </div>
            <div className="taget">
              <img src={ensalada} alt="asd" />
              <h3>Plan nutricional</h3>
              <p>¿Sos veganx/vegetarianx? no importa, tenemos planes nutricionales para vos.</p>
            </div>
          </div>
          <div className="div-line" />
          <div className="mobile-swiper">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.right-btn',
                prevEl: '.left-btn',
              }}
            >
              <SwiperSlide>
                {' '}
                <img src={imguno} alt="banner1" className="img-banner" />
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <img src={imgdos} alt="banner2" className="img-banner" />
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <img src={imgtres} alt="banner3" className="img-banner" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="promo-banner-home">
            <div className="swiper-container-with-arrows">
              <div className="left-btn">
                <img src={flechaiz} alt="flechaiz" />
              </div>
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.right-btn',
                  prevEl: '.left-btn',
                }}
              >
                <SwiperSlide>
                  {' '}
                  <img src={imguno} alt="banner1" className="img-banner" />
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <img src={imgdos} alt="banner2" className="img-banner" />
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <img src={imgtres} alt="banner3" className="img-banner" />
                </SwiperSlide>
              </Swiper>
              <div className="right-btn">
                <img src={flechade} alt="flechaiz" />
              </div>
            </div>
          </div>
          <div className="modal">
            <button
              className="btn-gral"
              type="button"
              onClick={() => {
                setButton((data) => !data);
              }}
            >
              INFORMACION INTERESANTE 👀...

            </button>
          </div>
          <div className="modal">
            {button ? <img src={grafico} alt="banner" className="img-border-graphic" /> : null}
          </div>
          <div className="div-line" />
        </div>
        <div className="user-registration" id="formulario">
          <div className="content-gral">
            <h3 className="rutina-h3">
              Pedi tu
              {' '}
              <span>rutina</span>
              {' '}
              y entrenamiento
              {' '}
              <span>personalizado</span>
            </h3>
            <h4 className="rutina-h4">
              Rellenando el siguiente
              {' '}
              <span>formulario</span>
            </h4>
            <div className="form-container">
              <div className="content-form">
                <form>
                  <div className="line-form">
                    <span>Nombre</span>
                    <input
                      onChange={(data) => {
                        setName(data.target.value);
                      }}
                      type="text"
                      placeholder="Ingresa el nombre"
                    />
                  </div>
                  <div className="line-form">
                    <span>Apellido</span>
                    <input
                      onChange={(data) => {
                        setLastName(data.target.value);
                      }}
                      type="text"
                      placeholder="Ingresa el apellido"
                    />
                  </div>
                  <div className="line-form">
                    <span>E-mail</span>
                    <input
                      onChange={(data) => {
                        setEmail(data.target.value);
                      }}
                      type="email"
                      placeholder="Ingresa tu email"
                    />
                  </div>
                  <div className="line-form">
                    <span>Teléfono</span>
                    <input
                      onChange={(data) => {
                        setNumber(data.target.value);
                      }}
                      type="number"
                      placeholder="Ingresa tu numero de celular"
                    />
                  </div>
                  <div className="line-form">
                    <span>Nacionalidad</span>
                    <input
                      onChange={(data) => {
                        setCountry(data.target.value);
                      }}
                      type="text"
                      placeholder="Ingresa tu nacionalidad"
                    />
                  </div>
                </form>
              </div>
              <div className="content-form">
                <form>
                  <div className="line-form">
                    <span>Altura</span>
                    <input
                      onChange={(data) => {
                        setHeigth(data.target.value);
                      }}
                      type="text"
                      placeholder="Ingresa tu altura"
                    />
                  </div>
                  <div className="line-form">
                    <span>Peso</span>
                    <input
                      onChange={(data) => {
                        setWeigth(data.target.value);
                      }}
                      type="text"
                      placeholder="Ingresa tu peso"
                    />
                  </div>
                  <div className="line-form">
                    <span>Edad</span>
                    <input
                      onChange={(data) => {
                        setAge(data.target.value);
                      }}
                      type="number"
                      placeholder="Ingresa tu edad"
                    />
                  </div>
                  <div className="line-form">
                    <span>¿Eres vegano/vegetariano? en caso de serlo, marque la casilla.</span>
                    <input
                      onClick={() => {
                        setVegan((data) => !data);
                      }}
                      type="checkbox"
                      className="checkbox-form"
                      name="form"
                    />
                  </div>
                  <div className="line-form">
                    <span>¿Tomás medicamentos? en caso de serlo, marque la casilla.</span>
                    <input
                      onClick={() => setChecked((data) => !data)}
                      type="checkbox"
                      className="checkbox-form"
                      name="form"
                    />
                  </div>
                  {checked ? (
                    <div className="line-form textarea-form">
                      <span>Contanos de vos, ¿Que medicamento tomas?</span>
                      <textarea
                        onChange={(data) => {
                          setDescription(data.target.value);
                        }}
                      />
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
            <div className="button-center">
              <HyperModal
                classes={{
                  contentClassName: 'modal-content',
                }}
                renderOpenButton={(requestOpen) => {
                  return (
                    <button
                      onClick={requestOpen}
                      title="open"
                      type="button"
                      className="btn-gral"
                      position="center"
                    >
                      Confirmar

                    </button>
                  );
                }}
              >

                <div className="modal-form-container">
                  <h2 className="title-modal">Por favor, verifique sus datos.</h2>
                  <div className="response-form-container">
                    <div className="response-form">
                      <div className="line-form">
                        <span>Nombre</span>
                        <p>{name}</p>
                      </div>
                      <div className="line-form">
                        <span>Apellido</span>
                        <p>{lastName}</p>
                      </div>
                      <div className="line-form">
                        <span>Email</span>
                        <p>{email}</p>
                      </div>
                      <div className="line-form">
                        <span>Teléfono</span>
                        <p>{number}</p>
                      </div>
                      <div className="line-form">
                        <span>Nacionalidad</span>
                        <p>{country}</p>
                      </div>
                    </div>
                    <div className="response-form">
                      <div className="line-form">
                        <span>Altura</span>
                        <p>{heigth}</p>
                      </div>
                      <div className="line-form">
                        <span>Peso</span>
                        <p>{weigth}</p>
                      </div>
                      <div className="line-form">
                        <span>Edad</span>
                        <p>{age}</p>
                      </div>
                      <div className="line-form">
                        <span>Vegano</span>
                        <p>{vegan ? 'Sí' : 'No'}</p>
                      </div>
                      <div className="line-form">
                        <span>Descripción de si toma medicamentos</span>
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="button-modal">
                    <button
                      type="button"
                      className="btn-gral"
                      onClick={() => {
                        alert('form enviado con exito');
                        window.location.reload();
                      }}
                    >
                      Enviar datos
                    </button>
                  </div>
                </div>

              </HyperModal>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
