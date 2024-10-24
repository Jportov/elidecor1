import React, { useEffect, useState } from 'react';
import 'swiper/css'; // Importando CSS básico do Swiper
import 'swiper/css/navigation'; // Importando CSS para a navegação
import 'swiper/css/pagination'; // Importando CSS para a paginação
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselContainer, Slide, SlideImage } from './styles';

const ImageCarousel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Pegando as imagens da pasta 'public/images' na Vercel
        const imagePaths = [
            '/images/aniversario.jpg',
            '/images/casa.jpg',
            '/images/natal.jpg',
            '/images/natal2.jpg',
            '/images/pascoa.jpg',
            '/images/sssss.jpg',
            '/images/pascoa.jpg',
            '/images/pascoa.jpg',
            '/images/pascoa.jpg',
            '/images/pascoa.jpg', // Certifique-se de que essas imagens existem
        ];

        setImages(imagePaths);
    }, []);

    return (
        <CarouselContainer>
            <Swiper spaceBetween={50} slidesPerView={1} navigation autoplay={{ delay: 2000 }} loop={false}>
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Slide>
                            <SlideImage src={src} alt={`Slide ${index}`} />
                        </Slide>
                    </SwiperSlide>
                ))}
            </Swiper>
        </CarouselContainer>
    );
};

export default ImageCarousel;
