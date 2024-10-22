import React, { useState } from 'react';
import * as S from './style';
import * as C from './copy';
import MenuBtn from './components/template';

export default function Template() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // 클릭된 버튼의 인덱스를 관리

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        {C.menuList().map(({ title, link }, index) => (
          <MenuBtn
            key={link}
            isActive={activeIndex === index} // 클릭된 인덱스와 비교
            title={title}
            link={link}
            onClick={() => setActiveIndex(index)} // 클릭 시 active 상태 변경
          />
        ))}
      </S.MenuWrapper>
    </S.Wrapper>
  );
}
