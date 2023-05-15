import "./mainPage.css"
import { useContext } from "react";
import React from "react";
// import { ThemeContext } from "../../ThemeContext";
// import { StyledExpensesMinDiv } from "./mainPage.styled";
import { LanguageContext } from "../../LanguageContext";
import { TEXTS } from "../../Languages";
// import ScrollableArray from "../../components/ScrollableArray/ScrollableArray";
import Slider from "../../components/SlideShow/SlideShow";
import Carousel from "../../components/carousel/Carousel.jsx";

// import SimpleSlider from "../../components/SlideShow/SlideShow"






const MainPage = () => {
    // const {theme} = useContext(ThemeContext)
    const  {language} = useContext(LanguageContext);
    

return (
    <div className="container">
    {/* <StyledExpensesMinDiv className="mainContainer" theme={theme}>
    </StyledExpensesMinDiv> */}


    {/* <h1> {TEXTS[language].mainPageH1}</h1> */}
    {/* <SlideShow/> */}
    {/* <SimpleSlider/> */}
    <Slider/>
    <div>
        <Carousel headerText="საბავშვო ბაღი" backgroundColor="yellow" />
        <Carousel headerText="სკოლა" backgroundColor="chartreuse" />
        <Carousel headerText="დაბადების დღის ცენტრი" backgroundColor="orange" />
        <Carousel headerText="გართობა" backgroundColor="rgb(189, 35, 61)" />
        <Carousel headerText="სპორტი" backgroundColor="rgb(51, 51, 245)" />
      </div>


    {/* <ScrollableArray />, */}
    

    </div>
)
}

export default MainPage;