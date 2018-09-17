import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import removeBasketItem from "../../actions/removeBasketItem";
import getBasket from "../../actions/getBasket";
import { MealCard, Footer } from "../../components";
import { MealName, Delivery, OrderInfo, Cost } from "./BasketPage.style";

import mealImage from "../../assets/meal_image.png";

class BasketPage extends Component {
  basketIsEmpty = () => this.props.addToBasket.basket.length === 0;
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        {this.basketIsEmpty() ? (
          <React.Fragment>
            <h1>Your Basket is empty!</h1>
            <p>
              Your Shopping Basket lives to serve. Give it purpose--fill it with
              declicous meals.
            </p>
            <p>
              Continue shopping on the <Link to="/">WeCook homepage</Link>
            </p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1>Your Basket..</h1>
            {this.props.addToBasket.basket.map(basketItems => {
              return (
                <MealCard
                  mealImage={basketItems.mealId.meal_image_url[0].mealUrl}
                  key={basketItems.mealId.meal_id}
                >
                  <MealName>{basketItems.mealId.meal_title}</MealName>
                  <Delivery>For delivery for 7pm on 22/09/18</Delivery>
                  <OrderInfo>
                    <Cost>Cost: £{basketItems.mealId.price}</Cost>
                    <select>
                      <option value="">1 Portion</option>
                    </select>
                    <button onClick={this.props.removeBasketItem}>
                      Delete
                    </button>
                  </OrderInfo>
                </MealCard>
              );
            })};
            <Footer />
          </React.Fragment>
        )};
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ addToBasket }) => ({
  addToBasket: addToBasket
});

const mapDispatchToProps = {
  getBasket,
  removeBasketItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketPage);
