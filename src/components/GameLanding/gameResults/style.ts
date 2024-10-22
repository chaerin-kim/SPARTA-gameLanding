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

  // swiper 관련 중요 !!
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

  ${forDesktop} {
    display: flex;
    flex-direction: column;
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
