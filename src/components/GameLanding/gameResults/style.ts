import styled from '@emotion/styled';
import { forDesktop } from '@/styles/device';
import {
  additional,
  mBody2,
  mHeader1,
  mTitle2,
  neutralDay,
  wBody2,
  wHeader2,
  wTitle2,
} from '@teamsparta/design-system';

export const Background = styled.section`
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${neutralDay.gray100};

  overflow: hidden !important;

  .swiper {
    overflow: visible !important;
  }

  .swiper-slide {
    width: 300px !important;
    height: auto;

    ${forDesktop} {
      width: 554px !important;
    }
  }

  ${forDesktop} {
    padding: 100px 0;
  }
`;

export const Content = styled.section`
  width: 100%;
  min-width: 328px;
  max-width: 600px;
  margin: 0 16px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  ${forDesktop} {
    max-width: 820px;
    margin: 0;
    gap: 60px;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;

  ${forDesktop} {
    justify-content: space-between;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const SwiperSection = styled.section`
  display: flex;
  ${forDesktop} {
    min-height: 537px;
    height: auto;
  }
`;

export const DesktopSwiperButtonSection = styled.section`
  display: none;
  position: absolute;
  right: 300px;
  bottom: -320px;
  ${forDesktop} {
    display: flex;
    justify-content: end;
  }
`;

export const SemiTitle = styled.h3`
  ${mTitle2};
  color: ${additional.mint100} !important;
  ${forDesktop} {
    ${wTitle2};
  }
`;

export const Title = styled.h2`
  ${mHeader1};
  color: ${neutralDay.white} !important;
  margin: 8px 0 16px 0;
  white-space: pre-wrap;

  ${forDesktop} {
    ${wHeader2};
    margin: 12px 0 20px 0;
  }
`;

export const Desc = styled.p`
  ${mBody2};
  color: ${neutralDay.gray60} !important;

  ${forDesktop} {
    ${wBody2};
  }
`;

export const SwiperButtons = styled.div`
  display: none;
  align-items: flex-start;
  gap: 12px;

  ${forDesktop} {
    display: flex;
    justify-content: center;
  }
`;

export const SwiperButton = styled.button<{ isActive: boolean }>`
  border: 1px solid white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.2)};
`;

export const Swiper = styled.div`
  display: flex;
  gap: 30px;
`;
export const SwiperSlide = styled.div`
  background-color: ${neutralDay.white};
`;

export const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const PrevButton = styled(NavButton)`
  margin-right: 10px;
`;

export const NextButton = styled(NavButton)`
  margin-left: 10px;
`;

export const ArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 12px solid white;
`;

export const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 12px solid white;
`;
