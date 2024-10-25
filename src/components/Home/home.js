import { default as React, useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Elisa from "../assets/images/elisa.jpg";
import { AboutImage, AboutSection, ButtonContainer, CustomPaginationBullet, CustomSwiperButton, Slide, SlideImage } from './styles';

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagePaths = [
      '/images/aniversario.jpg',
      '/images/casa.jpg',
      '/images/natal.jpg',
      '/images/natal2.jpg',
      '/images/pascoa.jpg',
    ];

    setImages(imagePaths);
  }, []);

  return (
    <AboutSection>
      <div className="container">
        <AboutImage src={Elisa} alt="Foto Elisa" />
        <h2>Quem Somos</h2>
        <p>
          Na EliDecor, somos especialistas em transformar espaços através de uma decoração única e personalizada. Nossa missão é proporcionar conforto e beleza para eventos, residências e estúdios, sempre respeitando os gostos e culturas de nossos clientes. Acreditamos que cada detalhe faz a diferença, e estamos aqui para tornar suas visões em realidade, criando ambientes que refletem sua personalidade e estilo.
        </p>
        <h3 className="text-center mt-5">Confira alguns de nossos trabalhos:</h3>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Slide>
              <SlideImage src={src} alt={`Slide ${index}`} />
            </Slide>
          </SwiperSlide>
        ))}

        <ButtonContainer>
          <CustomSwiperButton className="custom-prev"></CustomSwiperButton>
          <CustomSwiperButton className="custom-next"></CustomSwiperButton>
        </ButtonContainer>

        <CustomPaginationBullet className="swiper-pagination-bullet" />
      </Swiper>
    </AboutSection>
  );
}

export default Home;
