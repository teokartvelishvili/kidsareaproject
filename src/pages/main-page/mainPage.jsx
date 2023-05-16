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
import Footer from "../../components/footer/footer";

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
        <Carousel headerText={TEXTS[language].kindergarten} backgroundColor="yellow" />
        <Carousel headerText={TEXTS[language].school} backgroundColor="chartreuse" />
        <Carousel headerText={TEXTS[language].bDay} backgroundColor="orange" />
        <Carousel headerText={TEXTS[language].fun} backgroundColor="rgb(189, 35, 61)" />
        <Carousel headerText={TEXTS[language].sport} backgroundColor="rgb(51, 51, 245)" />
      </div>
      <Footer/>


    {/* <ScrollableArray />, */}
    

    </div>
)
}

export default MainPage;