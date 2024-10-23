import styled from '@emotion/styled';
import { neutralDay } from '@teamsparta/design-system';

export const CustomPagination = styled.div`
  // 전체적인 위치 조정
  .swiper-pagination {
    transform: translateY(40px);
  }

  // 각 bullet 스타일
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background-color: ${neutralDay.white};
    opacity: 0.3;
    transition: width 0.3s ease, opacity 0.3s ease;
    border: 1px solid white;
  }

  // active bullet 스타일
  .swiper-pagination-bullet-active {
    width: 15px;
    border-radius: 100px;
    opacity: 1;
  }
`;
