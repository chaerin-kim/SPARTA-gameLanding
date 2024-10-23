import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // 🔥
import 'swiper/css/pagination'; // 🔥
import { useSwiper } from '../../../hooks/customhooks';

/**
 * Dot Custom Pagination 컴포넌트
 * - Swiper에 Pagination 모듈 추가하고
 * - className을 이용해 스타일링하면 끝
 * @constructor
 */
export default function Template() {
  const { handleMountSwiper, handleSlideChange } = useSwiper(1);

  return (
    <Swiper
      onSwiper={handleMountSwiper}
      onSlideChange={handleSlideChange}
      slidesPerView='auto'
      spaceBetween={10}
      breakpoints={{
        1024: {
          spaceBetween: 20,
        },
      }}
      style={{
        width: '100%',
      }}
      centeredSlides={true}
      modules={[Pagination]} //🔥
      pagination={{ clickable: true }} //🔥
    ></Swiper>
  );
}
