// import { useState } from 'react';
import { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  StyledThemeMainDiv,
  StyledlightModeDiv,
  StyledDarkModeDiv,
} from "./header.styled";



// import SwitchLanguage from '../switchLanguage/SwitchLanguage.jsx';

// import { LanguageContext } from '../../LanguageContext';
import { ThemeContext } from "../../ThemeContext";

const Header = () => {
  // return <div>hello</div>;
  // const [language, setLanguage] = useState('ge');

  const themeContext = useContext(ThemeContext);
  const ligthOnClick = () => {
    themeContext.setTheme("light");
  };
  const darkOnClick = () => {
    themeContext.setTheme("dark");

    // const onThemeChange = () => {
    //     themeContext.setTheme(themeContext.theme === "light" ? "dark" : "light");
  };
  return (
    // <Link to={"/add-expense"}>Add Expense</Link>
    // <LanguageContext.Provider value={{ language, setLanguage }}>
    //     <SwitchLanguage/>
    <div>
      <div className="Header">
        <div>
          <Link to={"/"}>მთავარი</Link>
        </div>
        <div>
          <Link to={"/signup"}>რეგისტრაცია</Link>{" "}
        </div>
        <div>
          <Link to={"/signin"}>შესვლა</Link>
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
      </div>

      {/* // </LanguageContext.Provider> */}
    </div>
  );
};

export default Header;
