import * as S from './style';
import Image from 'next/image';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.LeftSection>
        <Image
          src="/images/logo/newLogo.svg"
          alt="newLogo"
          width={120}
          height={40}
        />
      </S.LeftSection>

      <S.RightSection>
        <S.MenuItem>로그인</S.MenuItem>
        <S.Divider>|</S.Divider>
        <S.MenuItem>고객센터</S.MenuItem>
      </S.RightSection>
    </S.HeaderWrapper>
  );
};

export default Header;
