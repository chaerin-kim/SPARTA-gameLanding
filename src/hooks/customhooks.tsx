import { useEffect, useState } from 'react';
import { displayBreakPoints } from '../../styles/variables';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되고 나서 window 객체에 접근
    setIsMobile(window.innerWidth < displayBreakPoints.desktop);
    const handleResize = () => {
      setIsMobile(window.innerWidth < displayBreakPoints.desktop);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};


//   const [isShowTimerRibbon, setIsShowTimerRibbon] = useState(true);
//   const handleClickCloseButton = (
//     e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsShowTimerRibbon(false);
//   };

//   useRouterChangeStart({
//     onRouterChangeStartCallback: () => {
//       setTimeout(() => {
//         setIsShowTimerRibbon(true);
//       }, 500);
//     },
//   });

//   return { isShowTimerRibbon, handleClickCloseButton };
// };
