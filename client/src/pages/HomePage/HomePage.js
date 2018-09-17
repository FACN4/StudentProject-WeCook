import React from "react";
import HomeHeader from './sections/HomeHeader/HomeHeader';
import AboutTheCompany from './sections/AboutTheCompany/AboutTheCompany';
import MealSearchForm from './sections/MealSearchForm/MealSearchForm'
import {Footer} from '../../components'
import {FooterWrapper} from '../../components/Footer/FooterWrapper'
import {StyledPara} from './HomePage.style'

const HomePage = () => {
  const submit = values => {
    // print the form values to the console
    console.log(values)
  }
  return (
    <React.Fragment>
      <FooterWrapper>
        <HomeHeader/>
        <StyledPara>Home cooked food made next door, delivered by your neighbout. Book ahead for your next meal</StyledPara>
        <MealSearchForm onSubmit={submit}/>
      </FooterWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
