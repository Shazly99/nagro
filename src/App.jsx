import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Component from 'constants/Component';
import LangChange from 'context/LangChange';
import './style/App.scss';
import FatchApi from 'context/FatchApi';
import { Suspense, lazy } from 'react';
import Compositions from 'pages/Compositions/Compositions';
import CompositionsDetails from 'pages/Compositions/CompositionsDetails';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('pages/Home/Home'))
const Connect = lazy(() => import('pages/Connect/Connect'))
const Services = lazy(() => import('pages/services/Services'))
const About = lazy(() => import('pages/About/About'))
const Blogs = lazy(() => import('pages/Blogs/Blogs'))
const BlogsDetails = lazy(() => import('pages/Blogs/BlogsDetails'))
const Clients = lazy(() => import('pages/Clients/Clients'))

function App() {

  const root = createBrowserRouter([
    {
      path: '/', element: <Component.Nagro />, children: [
        { index: true, element: <Suspense  ><Home /></Suspense> },
        { path: '/contact-us', element: <Suspense><Connect /> </Suspense> },
        { path: '/services', element: <Suspense><Services /> </Suspense> },
        { path: '/about', element: <Suspense><About /></Suspense> },
        { path: '/clients', element: <Suspense><Clients /></Suspense> },
        { path: '/compositions', element: <Suspense><Compositions /></Suspense> },
        {
          path: '/blogs', children: [
            { index: true, element: <Suspense><Blogs /></Suspense> },
            { path: 'details/:id', element: <Suspense><BlogsDetails /></Suspense> }
          ]
        },

        {
          path: '/compositions', children: [
            { index: true, element: <Suspense><Compositions /></Suspense> },
            { path: 'details/:id', element: <Suspense><CompositionsDetails /></Suspense> }
          ]
        },
        { path: '*', element: <Component.NotFound /> },
      ]
    },
  ])
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3500,
          style: {
            fontFamily: ' Arial, Helvetica, sans-serif',
            textTransform: 'capitalize',
            zIndex: '9999',
            // background: '#000',
            // color: '#fff',
            borderRadius: '10px',
            boxShadow: '10px 10px 10px rgba(188, 188, 188, 0.16)',
            background: '#fff',
            color: '#000',
          },
        }}
        containerStyle={{
          bottom: 50
        }}
      />
      <LangChange>
        <FatchApi>
          <RouterProvider router={root} />
        </FatchApi>
      </LangChange>
    </>
  );
}

export default App;
