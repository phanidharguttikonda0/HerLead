import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import SmoothScroll from './components/common/SmoothScroll';

const App = () => {
  return (
    <SmoothScroll>
      <RouterProvider router={router} />
    </SmoothScroll>
  );
};

export default App;