import * as S from './style';
import React from 'react';
import { GameProject } from '../copy';
import { usePlayActiveVideo } from '@/components/Swiper/logic';
import AutoPlayVideo from '@/components/Swiper/AutoPlayVideo/template';

interface Props extends GameProject {
  isActive?: boolean;
}
export function VideoCard({
  isActive = true,
  subTitle,
  title,
  desc,
  tags,
  videoUrl,
}: Props) {
  // active한 슬라이드의 비디오만 플레이함
  const videoRef = usePlayActiveVideo(isActive);

  return (
    <S.Wrapper>
      <S.VideoContainer>
        <AutoPlayVideo videoRef={videoRef} src={videoUrl} type={'video/mp4'} />
      </S.VideoContainer>
      <S.ContentSection>
        <S.TextContentWrapper>
          <S.TitleWrapper>
            <S.SemiTitle>{subTitle}</S.SemiTitle>
            <S.Title>{title}</S.Title>
          </S.TitleWrapper>
          <S.Desc>{desc}</S.Desc>
          <S.Tags>
            {tags.map((tag) => (
              <S.Tag key={tag}>{tag}</S.Tag>
            ))}
          </S.Tags>
        </S.TextContentWrapper>
      </S.ContentSection>
    </S.Wrapper>
  );
}
