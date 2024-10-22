import React from 'react';
import * as S from './style';

export default function MenuBtn({
  isActive,
  title,
  link,
  onClick,
}: {
  isActive: boolean;
  title: string;
  link: string;
  onClick: () => void;
}) {
  return (

    <S.ButtonWrapper>
      <S.Button isActive={isActive} onClick={onClick}>
        <S.Menu href={link}>{title}</S.Menu>
      </S.Button>
    </S.ButtonWrapper>
  );
}
