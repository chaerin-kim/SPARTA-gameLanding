import GameHero from '@/components/GameLanding/gameHero/template';
import StickyQuickMenu from '@/components/GameLanding/stickyQuickMenu/template';
import GameResults from '@/components/GameLanding/gameResults/template';
import GameHobbyToCareer from '@/components/GameLanding/gameHobbyToCareer/template';

export const getGameLandingComponents = () => {
  return (
    <>
      <GameHero />
      <StickyQuickMenu />
      <GameResults />
      <GameHobbyToCareer />
    </>
  );
};
