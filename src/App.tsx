import Navbar from "./components/Navbar/Navbar"
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kid from "./Pages/Kid";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home/></>
  },
  {
    path: '/men',
    element: <><Navbar/><Men/></>
  },
  {
    path: '/women',
    element: <><Navbar/><Women/></>
  },
  {
    path: '/kid',
    element: <><Navbar/><Kid/></>
  },
  {
    path: '/login',
    element: <><Navbar/><Login/></>
  },
  {
    path: '/cart',
    element: <><Navbar/><Cart/></>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
