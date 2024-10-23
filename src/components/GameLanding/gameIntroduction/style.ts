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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  gap: 40px;
  overflow: hidden;

  background-color: ${neutralDay.gray100};

  ${forDesktop} {
    padding: 100px 0;
    gap: 60px;
  }
`;

export const Wrapper = styled.section`
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

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 16px;

  ${forDesktop} {
    padding: 0%;
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
  white-space: pre-wrap;

  ${forDesktop} {
    ${wBody2};
    white-space: nowrap;
  }
`;



export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  // overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &::before {
    flex: 0 0 0px;
    width: 100%;
    content: '';
  }
  &::after {
    flex: 0 0 16px;
    width: 100%;
    content: '';
  }
  ${forDesktop} {
    margin: 0;

    &::before,
    &::after {
      flex: initial;
      width: initial;
      content: initial;
    }
  }
`;
