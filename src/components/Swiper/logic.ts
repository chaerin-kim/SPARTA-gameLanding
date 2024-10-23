import { useEffect, useRef } from 'react';

/**
 * swiper에서 현재 정중앙에 온 Active한 slide의 video만 플레이 할 때 사용하는 훅
 * @param isActive : boolean
 */
export function usePlayActiveVideo(isActive: boolean) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.play();
      return;
    }
    video.pause();
  }, [isActive]);

  return videoRef;
}
