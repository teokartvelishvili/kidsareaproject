import { StyeldBgWrapper } from "./layout.Styled";
import React from "react";
import Header from "../Header/header";
// import { useState } from 'react';
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
// import './Layout.css';

const Layout = (props) => {
  const themeContext = useContext(ThemeContext);

  // const onThemeChange = () => {
  //     themeContext.setTheme(themeContext.theme === "light" ? "dark" : "light");};

  return (
    <StyeldBgWrapper theme={themeContext.theme}>
      
      <Header />

      {props.children}
    </StyeldBgWrapper>
  );
};

export default Layout;
