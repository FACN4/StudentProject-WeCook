import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HomeHeader from "./sections/HomeHeader/HomeHeader";
import MealSearchForm from "./sections/MealSearchForm/MealSearchForm";
import { Footer, FooterWrapper } from "../../components";
import { StyledPara } from "./HomePage.style";
import {findMeals, mealsFound} from "../../actions/findMeals";


class HomePage extends Component {

  componentDidUpdate() {
    if (this.props.isFulfilled) {
      this.props.mealsFound();
      this.props.history.push('/mealList');
    }
  }

  submit = (values) => {
    const { postcode, deliveryDate } = values;
    this.props.findMeals({ postcode, deliveryDate });
  };
  render () {
    return (
      <React.Fragment>
        <FooterWrapper>
          <HomeHeader />
          <StyledPara>
            Home cooked food made next door, delivered by your neighbour. Book
            ahead for your next meal.
          </StyledPara>
          <MealSearchForm onSubmit={this.submit} />
        </FooterWrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  findMeals: PropTypes.func,
  mealsFound: PropTypes.func,
  deliveryDate: PropTypes.string,
  postcode: PropTypes.string,
  isFulfilled: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

const mapDispatchToProps = {
  findMeals,
  mealsFound
};
const mapStateToProps = ({ mealList }) => ({
  isFulfilled: mealList.isFulfilled
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
