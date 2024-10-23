import React from 'react';
import * as S from './style';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/customhooks';

const GAME_CDN_PATH = '/images/gameLanding/gameIntroduction/';

export default function GameHobbyToCareer() {
  const isMobile = useIsMobile();

  return (
    <S.Background>
      <S.Wrapper>
        <S.ImageWrapper>
          <Image
            src={GAME_CDN_PATH + `introImg_${isMobile ? 'mo' : 'pc'}.webp`}
            alt="game_introduction"
            width={isMobile ? 430 : 820}
            height={isMobile ? 774 : 585}
            unoptimized
          />
        </S.ImageWrapper>
      </S.Wrapper>
    </S.Background>
  );
}
