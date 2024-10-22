import { forDesktop } from '../../../styles/device';
import styled from '@emotion/styled';
import {
  mHeader0,
  mTitle2,
  neutralDay,
  scc,
  wBody1,
} from '@teamsparta/design-system';
import Link from 'next/link';
import Image from 'next/image';

export const LogoImage = styled(Image)`
  ${forDesktop} {
    margin-top: 0;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
  // background: black;
  height: 680px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${forDesktop} {
    height: 820px;
  }
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  bottom: -40px;
  cursor: pointer;
`;

export const VideoWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  overflow-x: hidden;
  z-index: -1;
`;
export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 600px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 19;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  gap: 12px;

  ${forDesktop} {
    gap: 16px;
  }
`;

export const ImageDescription = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  ${mHeader0};
  color: ${neutralDay.white} !important;
  white-space: pre-wrap;
  text-align: center;

  span {
    color: #ff6c7a;
  }

  ${forDesktop} {
    font-size: 50px;
    line-height: 140%;
  }
`;

export const Cta = styled(Link)`
  width: 164px;
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${scc.red100};

  ${mTitle2};
  color: #fff !important;

  ${forDesktop} {
    ${wBody1};
    width: 212px;
  }
`;

export const CtaAndBubble = styled.div`
  position: relative;
  z-index: 1;
`;
