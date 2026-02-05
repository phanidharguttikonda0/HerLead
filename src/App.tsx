import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import SmoothScroll from './components/common/SmoothScroll';
import SplashScreen from './components/common/SplashScreen';
import { SplashProvider, useSplash } from './hooks/useSplash';

const AppContent = () => {
  const { isSplashFinished, setSplashFinished } = useSplash();

  return (
    <>
      {!isSplashFinished && <SplashScreen onComplete={() => setSplashFinished(true)} />}
      <SmoothScroll>
        <div style={{
          opacity: isSplashFinished ? 1 : 0,
          transition: isSplashFinished && !sessionStorage.getItem('splash_shown') ? 'opacity 1s ease-in-out' : 'none'
        }}>
          <RouterProvider router={router} />
        </div>
      </SmoothScroll>
    </>
  );
};

const App = () => {
  return (
    <SplashProvider>
      <AppContent />
    </SplashProvider>
  );
};

export default App;