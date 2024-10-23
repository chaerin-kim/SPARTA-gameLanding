import GameHero from '@/components/GameLanding/gameHero/template';
import StickyQuickMenu from '@/components/GameLanding/stickyQuickMenu/template';
import GameResults from '@/components/GameLanding/gameResults/template';
import GameHobbyToCareer from '@/components/GameLanding/gameHobbyToCareer/template';
import GameIntroduction from '@/components/GameLanding/gameIntroduction/template';
import GameSalary from '@/components/GameLanding/gameSalary/template';

export const getGameLandingComponents = () => {
  return (
    <>
      <GameHero />
      <StickyQuickMenu />
      <GameResults />
      <GameHobbyToCareer />
      <GameIntroduction />
      <GameSalary />
    </>
  );
};
