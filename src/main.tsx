import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./contexts/Global.tsx";

import LandingPage from "./pages/Landing/Landing.tsx";
import AboutPage from "./pages/About/About.tsx";
import CvPage from "./pages/CV/CV.tsx";
import ErrorPage from "./pages/404/404.tsx";
import Layout from "./components/Layout/Layout.tsx";
import SnakeGame from "./pages/SnakeGame/SnakeGame.tsx";

import "./index.scss";
import "semantic-ui-css/semantic.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <LandingPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/cv",
    element: (
      <Layout>
        <CvPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/snake-game",
    element: (
      <Layout>
        <SnakeGame />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
