import * as S from './style';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/customhooks';

const GAME_SALARY_PATH = '/images/gameLanding/gamesalary/'

export default function GameSalary() {
  const isMobile = useIsMobile();

  return (
    <S.Background>
      <S.Wrapper>
        <S.ImageWrapper>
          <Image
            src={GAME_SALARY_PATH + `salary_pc.webp`}
            alt="gameSalary"
            width={isMobile ? 430 : 820}
            height={isMobile ? 774 : 756}
            unoptimized
          />
        </S.ImageWrapper>
      </S.Wrapper>
    </S.Background>
  );
}
