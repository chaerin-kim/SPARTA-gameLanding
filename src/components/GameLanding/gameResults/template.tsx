import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as S from './style'; // 스타일 파일은 유지
import * as C from './copy';  // 복사본은 유지

function Results() {
  // const [swiperRef, setSwiperRef] = useState(null);
  // const [slides] = useState([
  //   'Slide 1: 게임 1 설명',
  //   'Slide 2: 게임 2 설명',
  // ]); // 슬라이드는 2개로 설정

  // // 이전 슬라이드로 이동
  // const handlePrev = () => {
  //   if (swiperRef) swiperRef.slidePrev();
  // };

  // // 다음 슬라이드로 이동
  // const handleNext = () => {
  //   if (swiperRef) swiperRef.slideNext();
  // };

  return (
    <S.Background>
      <S.Content>
        <S.TitleSection>
          <S.Title>
            4개월 후,
            <br />
            나의 게임이 세상에 등장합니다
          </S.Title>
          <S.Desc>
            게임 서버 개발 수료생들이 4개월 만에 만든 작품입니다. <br />
            기획부터 유저 플레이까지, 게임 제작을 직접 경험해 볼 수 있습니다.
          </S.Desc>
        </S.TitleSection>

        <S.DesktopSwiperButtonSection>
          {/* <>
            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={setSwiperRef}
              slidesPerView={1} // 한 번에 한 슬라이드만 보이도록 설정
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={false} // 기본 내비게이션을 사용하지 않음
            >
              {slides.map((slideContent, index) => (
                <SwiperSlide key={index}>
                  {slideContent}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 슬라이드를 전환할 수 있는 버튼 */}
            {/* <S.PrevButton onClick={handlePrev}>이전</S.PrevButton>
            <S.NextButton onClick={handleNext}>다음</S.NextButton>
          </> */}
        </S.DesktopSwiperButtonSection>

      </S.Content>
    </S.Background>
  );
}

export default Results;
