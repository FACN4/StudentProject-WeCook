import React from "react";
import PropTypes from 'prop-types';
import {Header, MoneyButton} from '../../components'
import MealInfo from './sections/MealInfo/MealInfo'

const MealPage = (props) => {
  return (
    <React.Fragment>
      <Header />
      <MealInfo mealId={props.match.params.mealId}/>
      <MoneyButton />
    </React.Fragment>
  );
}

MealPage.propTypes = {
  match: PropTypes.object,
};

export default MealPage;
