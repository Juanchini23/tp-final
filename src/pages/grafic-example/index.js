import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './styles.scss';

export default function GraficExample() {
  return (
    <>
      <Header />
      <div className="line-div" />
      <div className="home-page">
        <div className="content-gral">
          <div className="first-heading">
            <h2 className="title-page">Estadisticas</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
