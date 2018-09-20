import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MealCard, MoneyButton, Header } from "../../components";
import removeBasketItem from "../../actions/removeBasketItem";

import {
  MealName,
  Delivery,
  OrderInfo,
  Cost,
  BasketPageWrapper
} from "./BasketPage.style";
import editBasketItem from "../../actions/editBasketItem";

class BasketPage extends Component {
  orderSum = () => {
    const { basket } = this.props;
    return Object.keys(basket).reduce(function(previous, key) {
      return (
        previous +
        parseFloat(basket[key].mealInfo.price) *
          parseFloat(basket[key].quantity)
      );
    }, 0);
  };
  changePortions = (itemId, value) => {
    this.props.editBasketItem(itemId, value);
  };
  render() {
    if (Object.keys(this.props.basket).length === 0) {
      return (
        <React.Fragment>
          <Header />
          <BasketPageWrapper>
            <h1>Your Basket is empty!</h1>
            <p>
              Your Shopping Basket lives to serve. Give it purpose--fill it with
              delicious meals.
            </p>
            <p>
              Continue shopping on the <Link to="/">WeCook homepage</Link>
            </p>
          </BasketPageWrapper>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Your Basket..</h1>
          {Object.keys(this.props.basket).map((itemId, index) => {
            const {
              meal_title,
              price,
              meal_scheduled_at,
              remaining_portions,
              final_booking_at,
              meal_image_url
            } = this.props.basket[itemId].mealInfo;
            const { quantity } = this.props.basket[itemId];
            return (
              <MealCard mealImage={meal_image_url[0].mealUrl} key={index}>
                <MealName>{meal_title}</MealName>
                <Delivery>For delivery for 7pm on 22/09/18</Delivery>
                <OrderInfo>
                  <Cost>Cost: £{price} each</Cost>
                  <select
                    onChange={({ target: { value } }) =>
                      this.changePortions(itemId, value)
                    }
                    value={quantity}
                  >
                    <option value={1}>1 Serving</option>
                    <option value={2}>2 Servings</option>
                    <option value={3}>3 Servings</option>
                    <option value={4}>4 Servings</option>
                    <option value={5}>5 Servings</option>
                  </select>
                  <button onClick={() => this.props.removeBasketItem(itemId)}>
                    Delete
                  </button>
                </OrderInfo>
              </MealCard>
            );
          })};
          <MoneyButton type="checkout" total={this.orderSum()} />
        </React.Fragment>
      );
    }
  }
}

BasketPage.propTypes = {
  basket: PropTypes.object,
  meal_title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  meal_scheduled_at: PropTypes.string,
  remaining_portions: PropTypes.string,
  final_booking_at: PropTypes.string,
  ingredients: PropTypes.string,
  tags: PropTypes.string,
  meal_image_url: PropTypes.string,
  removeBasketItem: PropTypes.func
};

const mapStateToProps = ({ basket }) => ({
  basket: basket
});

const mapDispatchToProps = {
  removeBasketItem,
  editBasketItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketPage);
