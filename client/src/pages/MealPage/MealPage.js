import React from "react";
import PropTypes from 'prop-types';
import {Header, MoneyButton} from '../../components'
import MealInfo from './sections/MealInfo/MealInfo'

export default class MealPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MealInfo mealId={this.props.match.params.mealId}/>
        <MoneyButton />
      </React.Fragment>
    );
  }
}

MealPage.propTypes = {
  match: PropTypes.object,
};
