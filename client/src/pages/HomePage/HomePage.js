import React from "react";
import HomeHeader from './sections/HomeHeader/HomeHeader';
import AboutTheCompany from './sections/AboutTheCompany/AboutTheCompany';
import MealSearchForm from './sections/MealSearchForm/MealSearchForm'
import {Footer} from '../../components'

const HomePage = () => {
  const submit = values => {
    // print the form values to the console
    console.log(values)
  }
  return (
    <React.Fragment>
      <HomeHeader />
      <p>Home cooked food made next door, delivered by your neighbout. Book ahead for your next meal</p>
      <MealSearchForm onSubmit={submit}/>
      <AboutTheCompany />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
