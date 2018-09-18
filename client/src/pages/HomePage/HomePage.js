import React from "react";
import HomeHeader from './sections/HomeHeader/HomeHeader';
import MealSearchForm from './sections/MealSearchForm/MealSearchForm'
import {Footer} from '../../components'
import {FooterWrapper} from '../../components/Footer/FooterWrapper'
import {StyledPara} from './HomePage.style'

const HomePage = () => {
  const submit = values => {
    // TODO
  }
  return (
    <React.Fragment>
      <FooterWrapper>
        <HomeHeader/>
        <StyledPara>Home cooked food made next door, delivered by your neighbour. Book ahead for your next meal</StyledPara>
        <MealSearchForm onSubmit={submit}/>
      </FooterWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;