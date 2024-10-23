import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Template({
  handleMountSwiper,
  handleSlideChange,
  slideLength,
}) {
  return (
    <Swiper
      onSwiper={handleMountSwiper}
      onSlideChange={handleSlideChange}
      slidesPerView='auto'
      spaceBetween={40}
      style={{
        width: '100%',
      }}
      centeredSlides={true}
    >
      {Array.from({ length: slideLength }, (_, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => <div key={index}></div>}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
