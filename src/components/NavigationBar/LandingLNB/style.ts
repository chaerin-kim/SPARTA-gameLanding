import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

export const MenuItem = styled.a`
  margin: 0 15px;
  font-size: 16px;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

export const Divider = styled.div`
  margin: 0 10px;
  color: #ccc;
`;
