import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as S from './style';
import * as C from './copy';

import { VideoCard } from './VideoCard/template';

function Results() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

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
          <div className="swiper-container">
            <Swiper
              loop={true} // 슬라이드 루프
              spaceBetween={50} // 슬라이스 사이 간격
              slidesPerView={3} // 보여질 슬라이스 수
              navigation={true} // prev, next button
            >
              {C.GameProjectData.map((card, index) => (
                <SwiperSlide key={card.title}>
                  <VideoCard isActive={true} index={index + 1} {...card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </S.DesktopSwiperButtonSection>
      </S.Content>
    </S.Background>
  );
}

export default Results;
