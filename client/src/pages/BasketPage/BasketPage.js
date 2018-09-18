import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MealCard} from "../../components";
import removeBasketItem from "../../actions/removeBasketItem";
import { MealName, Delivery, OrderInfo, Cost } from "./BasketPage.style";

class BasketPage extends Component {
  render() {
    if (Object.keys(this.props.basket).length === 0) {
      return (
        <React.Fragment>
          <h1>Your Basket is empty!</h1>
          <p>
            Your Shopping Basket lives to serve. Give it purpose--fill it with
            delicious meals.
          </p>
          <p>
            Continue shopping on the <Link to="/">WeCook homepage</Link>
          </p>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Your Basket..</h1>
          {Object.keys(this.props.basket).map(itemId => {
            const {
              meal_title,
              description,
              price,
              meal_scheduled_at,
              remaining_portions,
              final_booking_at,
              ingredients,
              tags,
              meal_image_url
            } = this.props.basket[itemId].mealInfo;
            return (
              <MealCard mealImage={meal_image_url[0].mealUrl} key={meal_title}>
                <MealName>{meal_title}</MealName>
                <Delivery>For delivery for 7pm on 22/09/18</Delivery>
                <OrderInfo>
                  <Cost>Cost: £{price}</Cost>
                  <select>
                    <option value="">1 Portion</option>
                    <option value="">2 Portions</option>
                    <option value="">3 Portions</option>
                    <option value="">4 Portions</option>
                  </select>
                  <button onClick={() => this.props.removeBasketItem(itemId)}>
                    Delete
                  </button>
                </OrderInfo>
              </MealCard>
            );
          })};
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = ({ basket }) => ({
  basket: basket
});

const mapDispatchToProps = {
  removeBasketItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketPage);
