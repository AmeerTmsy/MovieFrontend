import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import Home, {loader as homeLoader} from './routes/home';
import Movie, {loader as movieLoader} from './routes/movie';
import Abuot from './routes/about';
import Movies from './routes/movies';
import Contact from './routes/contact';
import Signup from './routes/signup';
import Login from './routes/login';
import store from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader
      },
      {
        path: '/about',
        element: <Abuot />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/movies/:movieId',
        element: <Movie />,
        loader: movieLoader
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
