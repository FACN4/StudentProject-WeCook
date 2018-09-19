import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { RenderDatePicker } from "../../../../components";
import "./MealSearchForm.css";

import {
  DateInput,
  Search,
  LocationInput
} from "../../../../themes/buttons.style";
import { StyledForm } from "./MealSearchForm.style";

class MealSearchForm extends Component {
  render() {
    return (
      <StyledForm onSubmit={this.props.handleSubmit}>
        <label htmlFor="postcode">Enter your postcode</label>
        <LocationInput
          id="postcode"
          name="postcode"
          component="input"
          type="text"
          placeholder="Enter your postcode"
        />
        <label htmlFor="delivery-date">Choose your delivery date</label>
        <DateInput
          id="delivery-date"
          name="delivery-date"
          type="text"
          component={RenderDatePicker}
          placeholder="Delivery Date"
        />
        <Search type="submit">Submit</Search>
      </StyledForm>
    );
  }
}

MealSearchForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "mealSearch",
  initialValues: {
    postcode: "",
    deliveryDate: moment().add(1, "days")
  }
})(MealSearchForm);
