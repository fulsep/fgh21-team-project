import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from './pages/About'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: '/about-us',
    element: <About />,
  },
  {
    path: '/Profile',
    element: <Profile/>,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
