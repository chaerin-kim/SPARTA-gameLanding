import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as S from './style'; // 필요한 스타일 파일
import * as C from './copy';
import { VideoCard } from './VideoCard/template';
import { useRef, useEffect } from 'react';

function Results() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // Swiper 초기화 후 내비게이션 버튼을 설정
      const swiperElement = document.querySelector('.swiper') as HTMLElement & {
        swiper: any;
      };
      if (swiperElement && swiperElement.swiper) {
        const swiper = swiperElement.swiper;
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
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
          </S.DesktopSwiperButtonSection>
        </S.TitleSection>

        <S.SwiperSection>
          <div className="swiper-container">
            <Swiper
              loop={true} // 슬라이드 루프
              spaceBetween={50} // 슬라이드 사이 간격
              slidesPerView={3} // 보여질 슬라이드 수
              navigation={true} // prev, next button 활성화
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
