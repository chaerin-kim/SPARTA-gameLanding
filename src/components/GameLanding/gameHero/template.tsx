import React from 'react';
import * as S from './style';

export default function GameHero() {
  return (
    <S.Wrapper>
      
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.LogoImage
            src="/images/logo/game_hero_logos.webp"
            alt="logo"
            width={217}
            height={21}
          />

          <S.Title>
            <>
              게임 업계 취업,
              <br />
              <span>4개월</span>만에 현실이 됩니다
            </>
          </S.Title>
        </S.TitleWrapper>
        <S.CtaAndBubble>
          <S.Cta href={`/404`}>사전알림 신청하기</S.Cta>
        </S.CtaAndBubble>
      </S.ContentWrapper>

      <S.VideoWrapper>
        <video
          src="/videos/gameLanding/resized_game_hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          controlsList="nodownload"
        />
      </S.VideoWrapper>
    </S.Wrapper>
  );
}
