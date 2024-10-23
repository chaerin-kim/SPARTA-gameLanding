import styled from '@emotion/styled';

/**
 * Swiper 사용 시 필수로 조작해야하는 css
 */
export const Background = styled.section`
  // 전체 div에 overflow : hidden 필수
  overflow: hidden !important;

  // swiper 영역은 visible하게
  .swiper {
    overflow: visible !important;
  }

  // swiper slide 한 개의 크기 지정
  // * 중요 : <SwiperSlide> 사이에 들어가는 요소와 크기가 동일해야함
  .swiper-slide {
    width: 554px !important;
    height: auto;
  }
`;
