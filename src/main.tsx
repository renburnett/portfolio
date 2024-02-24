import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/Landing/Landing.tsx";
import AboutPage from "./pages/About/About.tsx";
import CvPage from "./pages/CV/CV.tsx";
import ErrorPage from "./pages/404/404.tsx";
import Layout from "./components/Layout/Layout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import "semantic-ui-css/semantic.min.css";
import GameCanvas from "./pages/Tricerahops/GameCanvas.tsx";

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
    path: "/tricerahops",
    element: (
      <Layout>
        <GameCanvas />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

