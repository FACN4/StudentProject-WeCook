import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import HomeHeader from './sections/HomeHeader/HomeHeader';
import MealSearchForm from './sections/MealSearchForm/MealSearchForm'
import {Footer} from '../../components'
import {FooterWrapper} from '../../components/Footer/FooterWrapper'
import {StyledPara} from './HomePage.style'
import findMeals from '../../actions/findMeals'

const HomePage = (props) => {
  const submit = (values) => {
    const {postcode,deliveryDate} = values
    axios(`http://api.postcodes.io/postcodes/${postcode}`)
    .then(({data:{result:location}})=> {
      props.findMeals({location, deliveryDate})
    })
    .catch(console.log)
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

HomePage.propTypes = {
  findMeals: PropTypes.func,
  deliveryDate: PropTypes.string,
  postcode: PropTypes.string
};

const mapDispatchToProps = {
  findMeals
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
