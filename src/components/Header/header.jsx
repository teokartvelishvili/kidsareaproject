import { useState } from 'react';
import { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import TEXTS from '../../Languages';
import {
  StyledThemeMainDiv,
  StyledlightModeDiv,
  StyledDarkModeDiv,
  StyledMainLangDiv,
  StyledGeoFlagDiv,
  StyledEnFlagDiv 
} from "./header.styled";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'

import { ThemeContext } from "../../ThemeContext";
import { LanguageContext } from "../../LanguageContext";

const Header = () => {


  // return <div>hello</div>;
  const [language, setLanguage] = useState('ge');

  const themeContext = useContext(ThemeContext);
  const langContext = useContext(LanguageContext);
 

  const ligthOnClick = () => {
    themeContext.setTheme("light");
  };
  const darkOnClick = () => {
    themeContext.setTheme("dark");
  }; 
  const geoOnClick  = () => {
      langContext.setLanguage("ge");
  };
  const usaOnClick  = () => {
      langContext.setLanguage("us");   
  };

    // const onThemeChange = () => {
    //     themeContext.setTheme(themeContext.theme === "light" ? "dark" : "light");
  
  return (
    // <Link to={"/add-expense"}>Add Expense</Link>
    // <LanguageContext.Provider value={{ language, setLanguage }}>
    //     <SwitchLanguage/>
    <div>
      <div className="Header">
        <div>
          <Link to={"/"}><AiOutlineHome/></Link>
        </div>

        <div className="kidsAreaLogo">
        
        </div>



        {/* <div>
          <Link to={"/signup"}>რეგისტრაცია</Link>{" "}
        </div> */}
        <div>
          <Link to={"/signin"} className="no-decoration"><AiOutlineUser/> {TEXTS[language].loginButton} </Link>
        </div>

        {/* <button onClick={onThemeChange}>
        {themeContext.theme === "light" ? "make light" : "make dark"}
    </button> */}

        <StyledThemeMainDiv>
          <StyledlightModeDiv
            className={
              "lightMode " + (themeContext.theme === "light" ? "unvisible" : "")
            }
            onClick={ligthOnClick}
          ></StyledlightModeDiv>

          <StyledDarkModeDiv
            className={
              "darkMode " + (themeContext.theme === "dark" ? "unvisible" : "")
            }
            onClick={darkOnClick}
          ></StyledDarkModeDiv>
        </StyledThemeMainDiv>




        <StyledMainLangDiv>
            <StyledGeoFlagDiv 
                className={"GeoFlag " + (langContext.language === "ge" ? "unvisible" : "")}
                onClick={geoOnClick}>
            </StyledGeoFlagDiv>

            <StyledEnFlagDiv className={"UsaFlag " + (langContext.language === "us" ? "unvisible" : "")} onClick={usaOnClick} > </StyledEnFlagDiv>
        </StyledMainLangDiv>


  

      </div>

    </div>
  );
};

export default Header; 
