import React, { Component } from "react";
import {Gallery} from "../../../../components"

export default class MealInfo extends Component {
  render() {
    return (
      <section>
        <h1>Russian tomato sauce with shashlikee</h1>
        <div>
          <span>7pm 22/09/18</span>
          <span>£5 per serving</span>
          <span>14 hours to order</span>
          <span>15 servings left</span>
        </div>
        <Gallery />
      </section>
    );
  }
}
