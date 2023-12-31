import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import { Home } from '../pages/Home/Home'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Errorpage from '../pages/Errorpage/Errorpage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  // {
  //   path: "/signup",
  //   element: <Signup />
  // },
  // {
  //   path: "/login",
  //   element: <Login />
  // }
])
