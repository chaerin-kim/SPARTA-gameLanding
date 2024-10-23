// import game1 from '@/public/videos/gameLanding/gameResult/resized_game_result_1.mp4';
// import game2 from '@/public/videos/gameLanding/gameResult/resized_game_result_2.mp4';
// import game3 from '@/public/videos/gameLanding/gameResult/resized_game_result_3.mp4';

export interface GameProject {
  subTitle: string;
  title: string;
  desc: string;
  tags: string[];
  videoUrl: string;
}

export const GameProjectData: GameProject[] = [
  {
    subTitle: '이전 회차 최우수작',
    title: 'The Last RollBack',
    desc: '4명의 플레이어가 강력한 몬스터들로부터 타워를\n지켜서 최종 라운드까지 살아남는 쿼터뷰 게임',
    tags: ['MMORPG', '디펜스 게임'],
    videoUrl:
      '../../../../../public/videos/gameLanding/gameResult/resized_game_result_1.mp4',
  },
  {
    subTitle: '이전 회차 우수작',
    title: '파이어 펀치',
    desc: '마을에서 유저들과 친목을 다지고 던전을 클리어하며\n캐릭터를 성장시키는 3인칭 액션 게임',
    tags: ['턴제 전투', '3인칭 액션'],
    videoUrl:
      '../../../../../public/videos/gameLanding/gameResult/resized_game_result_2.mp4',
  },
  {
    subTitle: '이전 회차 인기작',
    title: '관청이 불타 토지문서가 사라졌다',
    desc: '평화로운 마을에서 관청이 불타 토지 문서들이 사라진\n혼돈 속, 토지를 차지하기 위해 벌어지는 대전 게임',
    tags: ['2:2 멀티 게임', '대전 게임'],
    videoUrl:
      '../../../../../public/videos/gameLanding/gameResult/resized_game_result_3.mp4',
  },
];
