import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./authComponents/Home.jsx";
import Login from "./authComponents/Login.jsx";
import Register from "./authComponents/Register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import HomePage from "./components/HomePage.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ForgotPassword from "./authComponents/ForgotPassword.jsx";
import ResetPassword from "./authComponents/ResetPassword.jsx";
import EmailVerify from "./authComponents/EmailVerify.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "resetPassword/:id/:token",
    element: <ResetPassword />,
  },
  {
    path:"/:id/verify/:token",
    element:<EmailVerify/>
  },

  {
    path: "services",
    element: <Services />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
