import * as S from './style';

export default function AutoPlayVideo({ videoRef, src, type }) {
  return (
    <S.Video
      ref={videoRef}
      playsInline
      autoPlay
      muted
      loop
      controls={false}
      controlsList='nodownload'
    >
      <source src={src} type={type} />
    </S.Video>
  );
}
