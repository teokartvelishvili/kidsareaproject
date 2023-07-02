import "./App.css";
// import Login from './pages/login/Login';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
// import SwitchLanguage from './components/switchLanguage/SwitchLanguage';
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import Layout from "./components/Layout/layout";
import SignUp from "./pages/sign-up/signUp";
import SignIn from "./pages/sign-in/signIn";
import MainPage from "./pages/main-page/mainPage";
import About from "./pages/aboutUs/About";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/signin"
        element={
          <Layout>
            <SignIn />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />

      <Route
        path="/"
        element={
          <Layout>
            <MainPage />
          </Layout>
        }
      />
      <Route
        path="/aboutUs"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
    </>
  )
);

function App() {
  const [language, setLanguage] = useState("ge");
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <RouterProvider router={router} />;
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
