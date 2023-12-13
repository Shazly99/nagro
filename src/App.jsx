import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Component from 'constants/Component';
import LangChange from 'context/LangChange';
import './style/App.scss';
import FatchApi from 'context/FatchApi';

function App() {

  const root = createBrowserRouter([
    {
      path: '/', element: <Component.Nagro />, children: [
        { index: true, element: <Component.Home /> },
        { path: '/contact-us', element: <Component.Connect /> },
        { path: '/services', element: <Component.Services /> },
        { path: '/about', element: <Component.About /> },
        { path: '/blogs', element: <Component.Blogs /> },
        { path: '*', element: <Component.NotFound /> },
      ]
    },
  ])
  return (
    <>
      <LangChange>
        <FatchApi>
          <RouterProvider router={root} />
        </FatchApi>
      </LangChange>
    </>
  );
}

export default App;
