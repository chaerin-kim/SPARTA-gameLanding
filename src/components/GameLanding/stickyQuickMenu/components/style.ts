import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button<{ isActive: boolean }>`
  gap: 10px;
  padding: 10px;
  margin: 10px;
  background-color: ${({ isActive }) =>
    isActive ? 'transparent' : '#transparent'};
  color: ${({ isActive }) => (isActive ? '#FF6C7A;' : '#9DA7AE')};

  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  // isActive가 true일 때 hover가 적용되지 않도록 설정
  &:hover {
    background-color: ${({ isActive }) =>
      isActive
        ? 'transparent'
        : '#f2f6f8'}; // active 상태에서는 hover 변경 없음
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 30;
    bottom: 0px; /* 아래쪽에 위치 */
    left: 0px;
    width: 100%;
    height: 2px;
    background-color: ${({ isActive }) =>
      isActive
        ? '#FF6C7A'
        : 'transparent'}; /* isActive 상태에서만 보이게 설정 */
  }
`;

export const Menu = styled.a`
  background-color: transparent;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  color: inherit;
`;
