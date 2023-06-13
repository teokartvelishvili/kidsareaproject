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
        <Carousel headerText={TEXTS[language].kindergarten} backgroundColor="#3B8E52" />
        <Carousel headerText={TEXTS[language].school} backgroundColor="#D9DD1E" />
        <Carousel headerText={TEXTS[language].bDay} backgroundColor="#FF8351" />
        <Carousel headerText={TEXTS[language].fun} backgroundColor="#FF5D55" />
        <Carousel headerText={TEXTS[language].sport} backgroundColor="#3D8AF7" />
      </div>
      {/* <Footer/> */}


    {/* <ScrollableArray />, */}
    

    </div>
)
}

export default MainPage;