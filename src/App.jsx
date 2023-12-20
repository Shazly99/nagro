import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Component from 'constants/Component';
import LangChange from 'context/LangChange';
import './style/App.scss';
import FatchApi from 'context/FatchApi';
import { Suspense, lazy } from 'react'; 

const Home = lazy(() => import('pages/Home/Home'))
const Connect = lazy(() => import('pages/Connect/Connect'))
const Services = lazy(() => import('pages/services/Services'))
const About = lazy(() => import('pages/About/About'))
const Blogs = lazy(() => import('pages/Blogs/Blogs'))
const BlogsDetails = lazy(() => import('pages/Blogs/BlogsDetails'))

function App() {

  const root = createBrowserRouter([
    {
      path: '/', element: <Component.Nagro />, children: [
        { index: true, element: <Suspense  ><Home /></Suspense> },
        { path: '/contact-us', element: <Suspense><Connect /> </Suspense> },
        { path: '/services', element: <Suspense><Services /> </Suspense> },
        { path: '/about', element: <Suspense><About /></Suspense> }, 
        {
          path: '/blogs', children: [
            { index: true, element: <Suspense><Blogs /></Suspense> },
            { path: 'details/:id', element: <Suspense><BlogsDetails /></Suspense> }
          ]
        },
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
