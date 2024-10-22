import { useRouter } from 'next/router';
import Header from '../src/components/NavigationBar/LandingLNB/template';
import { getGameLandingComponents } from '@/components/LandingBackOffice/game';
import ErrorPage from '@/app/pages/ErrorPage/template';

const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query; // 동적 경로의 slug 값 가져오기

  if (slug === '404') {
    return (
      <ErrorPage
        errorCode={'404'}
        error={'Not Found'}
        globalErrorInfo={null}
        // slug를 경로로 사용
      />
    );
  }

  // slug 값이 'game'일 때 렌더링할 내용
  if (slug === 'game') {
    return (
      <>
        <Header /> {/* 헤더 컴포넌트 추가 */}
        {getGameLandingComponents()}
      </>
    );
  }

  // 다른 slug일 경우 처리
  return (
    <div>
      <Header /> {/* 헤더 컴포넌트 추가 */}
      <h1>Dynamic Page: {slug}</h1>
      <p>This page is rendered for slug: {slug}</p>
    </div>
  );
};

export default SlugPage;
