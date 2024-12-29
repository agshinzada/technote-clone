import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import TermsOfUsePage from "./pages/TermsOfUsePage.tsx";
import HomePage from "./pages/HomePage.tsx";
import CookiesPage from "./pages/CookiesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import NewsDetailPage from "./pages/NewsDetailPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/istifade-sertleri",
        element: <TermsOfUsePage />,
      },
      {
        path: "/cerezler",
        element: <CookiesPage />,
      },
      {
        path: "/haqqimizda",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/:category",
        element: <CategoryPage />,
      },
      {
        path: "/axtar",
        element: <SearchPage />,
      },
      {
        path: "/:category/:url",
        element: <NewsDetailPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
