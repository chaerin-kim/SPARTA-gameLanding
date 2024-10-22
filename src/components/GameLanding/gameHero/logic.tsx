import { useEffect, useState } from 'react';
import { getHackleTestGroup, HackleABTGroup } from '@/logics/business/hackle';

export const useFlip = () => {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    setFlip((prevFlip) => !prevFlip);

    const interval = setInterval(() => {
      setFlip((prevFlip) => !prevFlip);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return flip;
};

const AfreecaTitleBGroup = (
  <>
    100% 온라인
    <br />
    <span>게임 서버 개발</span> 부트캠프
  </>
);

const defaultHeroTitle = (
  <>
    게임 업계 취업
    <br />
    <span>4개월</span>만에 현실로
  </>
);

export function getHeroTitles(utmValue, isReady, isAGroup) {
  //utm 없을 때 (아프리카 소재 아닐 때)
  if (!utmValue) {
    return defaultHeroTitle;
  }

  //utm 있을 때 (아프리카 소재일 때)
  if (!isReady) {
    return <></>; // ready 상태로 바뀔 때 글자 바뀌는 것 방지하기 위해 빈 문자열 반환
  }
  return isAGroup ? defaultHeroTitle : AfreecaTitleBGroup;
}

export function useGetTitles(decision, utmValue) {
  const { isReady, isAGroup }: HackleABTGroup = getHackleTestGroup(decision);
  {
    /**
     * 렌더링 후에 utm값을 쿠키에서 읽어온 후에 hero 텍스트가 바뀌는 것이 보이는 것을 방지하기 위해
     * hero 기본값은 빈 칸으로 둔 후, useEffect 내에서 hero 텍스트를 변경
     */
    const [titles, setTitles] = useState(undefined);

    useEffect(() => {
      setTitles(getHeroTitles(utmValue, isReady, isAGroup));
    }, [utmValue, isReady, isAGroup]);

    return titles;
  }
}
