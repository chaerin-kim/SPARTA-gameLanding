import styled from '@emotion/styled';
import {
  additional,
  mBody1,
  neutralDay,
  wBody1,
  wBody3,
  wTitle2,
} from '@teamsparta/design-system';
import { forDesktop } from '@/styles/device';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  ${forDesktop} {
    width: 554px;
    height: 537px;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;

  transform: translateZ(0);
  background-color: ${neutralDay.gray60};

  &:before {
    content: '';
    display: block;
    padding-top: 56.1%;
  }

  ${forDesktop} {
    height: 312px;
    border-radius: 12px;
  }
`;

export const ContentSection = styled.section`
  transform: translateY(-60px);
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 20px 0 20px;
  background: linear-gradient(180deg, rgba(20, 22, 23, 0) 0%, #141617 22%);
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SemiTitle = styled.p`
  ${mBody1};
  color: ${additional.mint100} !important;

  ${forDesktop} {
    ${wBody1};
  }
`;
export const Title = styled.h4`
  ${wTitle2};
  color: #fff !important;
`;

export const Desc = styled.p`
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  color: ${neutralDay.gray60} !important;
  white-space: pre;

  ${forDesktop} {
    ${wBody3};
    white-space: pre-wrap;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
`;

export const Tag = styled.div`
  display: flex;
  padding: 4px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background-color: ${neutralDay.gray90};

  color: ${neutralDay.gray60};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  ${forDesktop} {
    font-size: 13px;
    line-height: 21px;
  }
`;

export const customVideoStyle = css`
  position: absolute;
  top: -20px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;

  ${forDesktop} {
    top: -40px;
  }
`;
