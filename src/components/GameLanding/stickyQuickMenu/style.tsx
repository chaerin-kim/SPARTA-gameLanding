import { forDesktop } from '@/styles/device';
import styled from '@emotion/styled';
import { neutralDay, scc, wBody2 } from '@teamsparta/design-system';

export const Wrapper = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-bottom: 1px solid ${neutralDay.gray30};
  background-color: ${neutralDay.white};
  overflow-x: scroll;
  padding: 10px 16px 0 16px;
  top: 50px;
  z-index: 20;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 600px) {
    padding: 0;
    padding-top: 10px;
    justify-content: center;
  }

  ${forDesktop} {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Menu = styled.a<{ isActive: boolean }>`
  white-space: nowrap;
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${wBody2};
  color: ${({ isActive }) => (isActive ? scc.red75 : neutralDay.gray60)};
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  position: relative;

  &:hover {
    color: ${({ isActive }) => (isActive ? scc.red75 : neutralDay.gray90)};
    background-color: ${({ isActive }) =>
      isActive ? 'transparent' : neutralDay.gray5};
  }
`;

export const EarlyBirdWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const RedDot = styled.div`
  position: absolute;
  top: 2px;
  right: -8px;
  width: 5px;
  height: 5px;
  background-color: ${scc.red75};
  border-radius: 50%;
`;

export const Chip = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${scc.red75};
  border-radius: 50%;
  position: absolute;
  right: 4px;
  top: 6px;
`;

export const HiddenBar = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 2px;
  background-color: ${scc.red75};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
