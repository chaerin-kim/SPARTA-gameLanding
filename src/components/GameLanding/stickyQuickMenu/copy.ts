export interface MenuListInfo {
  title: string; // 메뉴 버튼의 제목
  link: string;  // 메뉴 버튼의 링크 (앵커 링크)
}

export const menuList = (): MenuListInfo[] => {
  return [
    {
      title: '결과물',
      link: '#gameResult',
    },
    {
      title: '트랙 소개',
      link: '#gameIntroduction',
    },
    {
      title: '커리큘럼',
      link: '#gameCurriculum',
    },
    {
      title: '취업 지원',
      link: '#gameCareerSupport',
    },
    {
      title: '모집개요',
      link: '#gameRecruitmentInfo',
    },
  ];
};
