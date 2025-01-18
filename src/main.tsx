import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// Pages Imports
import HomePage from "./Homepage.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Vote from "./pages/Vote.tsx";
import AdminPage from "./pages/adminPage.tsx";  // Import AdminPage

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/vote",
    element: <Vote />,
  },
  {
    path: "/admin",  // New route for Admin page
    element: <AdminPage />,  // AdminPage component
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
