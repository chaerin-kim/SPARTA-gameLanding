import * as S from './style';
import { ArrowBackLine, ArrowForwardLine } from '@teamsparta/design-system';

/**
 * Swiper slide를 앞, 뒤로 넘길 수 있는 화살표 버튼 컴포넌트
 */

interface Props {
  handleClickSwiperBackButton: () => void;
  handleClickSwiperForwardButton: () => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
}
export default function SwiperCircleButtons({
  handleClickSwiperBackButton,
  handleClickSwiperForwardButton,
  isFirstSlide,
  isLastSlide,
}: Props) {
  return (
    <S.SwiperButtons>
      <S.SwiperButton
        onClick={handleClickSwiperBackButton}
        disabled={isFirstSlide}
        isActive={!isFirstSlide}
      >
        <ArrowBackLine size={20} color={'white'} />
      </S.SwiperButton>
      <S.SwiperButton
        onClick={handleClickSwiperForwardButton}
        disabled={isLastSlide}
        isActive={!isLastSlide}
      >
        <ArrowForwardLine size={20} color={'white'} />
      </S.SwiperButton>
    </S.SwiperButtons>
  );
}
