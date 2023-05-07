import { useState } from 'react';
import { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { TEXTS } from '../../Languages';
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

  // const [language, setLanguage] = useState('ge');

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
  const EnOnClick  = () => {
      langContext.setLanguage("en");   
  };

  
  return (

    <div>
      <div className="Header">
        <div className='home'>
          <Link to={"/"}>
          <div className="kidsAreaLogo">
        </div>
          </Link>
        </div>

       

        
        <div className='signInButt'>
          <Link to={"/signin"} className="no-decoration"><AiOutlineUser/>
          შესვლა</Link>
        </div>

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

            <StyledEnFlagDiv 
            className={"EnFlag " + (langContext.language === "en" ? "unvisible" : "")}
            onClick={EnOnClick} > </StyledEnFlagDiv>
        </StyledMainLangDiv>


  

      </div>

    </div>
  );
};

export default Header; 
