import styled from '@emotion/styled';
import { forDesktop } from '@/styles/device';

export const SwiperButtons = styled.div`
  display: none;
  align-items: flex-start;
  gap: 12px;

  ${forDesktop} {
    display: flex;
    justify-content: center;
  }
`;

export const SwiperButton = styled.button<{ isActive: boolean }>`
  border: 1px solid white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.2)};
`;
