import React, { Component } from "react";
import { connect } from "react-redux";
import { MoneyButton, MealCard } from "../../components";
import { MealName, Delivery, OrderInfo, Cost } from "./BasketPage.style";

import mealImage from "../../assets/meal_image.png";

class BasketPage extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Your Basket</h1>
        <MealCard mealImage={mealImage}>
          <MealName>Russian tomato sauce with shashlikee</MealName>
          <Delivery>For delivery for 7pm on 22/09/18</Delivery>
          <OrderInfo>
            <Cost>Cost: £5.00</Cost>
            <select>
              <option value="">1 Portion</option>
            </select>
            <button>Delete</button>
          </OrderInfo>
        </MealCard>
        <MoneyButton />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ addToBasket }) => ({
  addToBasket: addToBasket
});

export default connect(mapStateToProps)(BasketPage);
