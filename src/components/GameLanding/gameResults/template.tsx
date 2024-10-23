import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import * as S from './style'; 
import * as C from './copy';
import { VideoCard } from './VideoCard/template';
import { useRef, useEffect } from 'react';

function Results() {
  SwiperCore.use([Navigation, Scrollbar]);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  return (
    <S.Background>
      <S.Content>
        <S.TitleSection>
          <S.TitleWrapper>
            <S.Title>
              4개월 후,
              <br />
              나의 게임이 세상에 등장합니다
            </S.Title>
            <S.Desc>
              게임 서버 개발 수료생들이 4개월 만에 만든 작품입니다. <br />
              기획부터 유저 플레이까지, 게임 제작을 직접 경험해 볼 수 있습니다.
            </S.Desc>
          </S.TitleWrapper>

          {/* 내비게이션 버튼 영역 */}
          <S.DesktopSwiperButtonSection>
            <S.PrevButton ref={prevRef}>
              <S.ArrowLeft />
            </S.PrevButton>
            <S.NextButton ref={nextRef}>
              <S.ArrowRight />
            </S.NextButton>
            <div className="swiper-pagination"></div>
          </S.DesktopSwiperButtonSection>
        </S.TitleSection>

        <S.SwiperSection>
          <div className="swiper-container">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={50}
              slidesPerView={1} 
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                el: '.swiper-pagination',
                type: 'fraction',
              }}
              centeredSlides={true}
              loop={false}  
              onReachEnd={(swiper) => {
                swiper.navigation.update();  // 마지막 슬라이드에서는 내비게이션 버튼 업데이트
              }}
            >
              {C.GameProjectData.map((card, index) => (
                <SwiperSlide key={card.title}>
                  <VideoCard isActive={true} cardIndex={index + 1} {...card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </S.SwiperSection>
      </S.Content>
    </S.Background>
  );
}

export default Results;
