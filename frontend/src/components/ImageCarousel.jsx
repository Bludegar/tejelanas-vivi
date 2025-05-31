import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './ImageCarousel.css';

import lana1 from '../assets/images/lana1.png';
import lana2 from '../assets/images/lana2.png';

function ImageCarousel() {
  const images = [lana1, lana2];

  return (
    <section className="image-carousel">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }} 
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Lana ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ImageCarousel;
