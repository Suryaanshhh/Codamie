import React from "react";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

import { createBrowserRouter, Outlet } from "react-router-dom";
import ProfilePage from "./ProfilePage";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/completeProfile",
    element: <ProfilePage />,
  }
]);

export default App;
