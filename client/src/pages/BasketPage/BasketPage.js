import React, { Component } from "react";
import { MoneyButton, MealCard } from "../../components";
import {
  MealName,
  Delivery,
  OrderInfo,
  Cost,
  BasketWrapper
} from "./BasketPage.style";

import mealImage from "../../assets/meal_image.png";

export default class MealListPage extends Component {
  render() {
    return (
      <BasketWrapper>
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
      </BasketWrapper>
    );
  }
}
