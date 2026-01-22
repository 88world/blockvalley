import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [displayLocation, setDisplayLocation] = useState(useLocation());
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const location = useLocation();

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`${
        transitionStage === 'fadeOut' ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-300 ease-in-out`}
      onTransitionEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransitionStage('fadeIn');
          setDisplayLocation(location);
        }
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
