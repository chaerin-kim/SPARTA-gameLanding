import React from 'react';
import * as S from './style';
import * as C from './copy';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/customhooks';

const GAME_CDN_PATH = '/images/gameLanding/gameHobbyToCareer/';

//types
export type ImageTitle = {
  mobile: string;
  desktop: string;
};

export type TitleInfo = {
  title: string;
  subTitle: string;
  imageTitle: ImageTitle | null;
};

export default function GameHobbyToCareer() {
  const isMobile = useIsMobile();

  return (
    <S.Background>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>{C.Title}</S.Title>
          <S.Desc>{C.Desc}</S.Desc>
        </S.TitleWrapper>

        <S.ImageWrapper>
          <Image
            src={
              GAME_CDN_PATH + `game_career_cards_${isMobile ? 'mo' : 'pc'}.webp`
            }
            alt="game_career_cards"
            width={isMobile ? 1168 : 820}
            height={isMobile ? 285 : 518}
            unoptimized
          />
        </S.ImageWrapper>
      </S.Wrapper>
    </S.Background>
  );
}
