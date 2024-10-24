import React from "react";
import 'swiper/swiper-bundle.css';
import Elisa from '../assets/images/elisa.jpg';

function Home() {
  return (
    <section id="about">
      <div className="container">
        <img
          className="foto-inicial img-fluid"
          src={Elisa}
          alt="Foto Elisa"
        />
        <div className="text-center mt-4">
          <h2>Quem somos</h2>
          <p>
            Somos uma loja especializada em decoração de eventos, casas e
            studios. E temos como objetivo levar o maior conforto para nossos
            clientes levando em consideração seus gostos e culturas.
          </p>
        </div>

        <h3 className="text-center mt-5">Confira alguns de nossos trabalhos:</h3>

      </div>
    </section>
  );
}

export default Home;
