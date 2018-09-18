import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {RenderDatePicker} from "../../../../components"

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
        <LocationInput
          name="postcode"
          component="input"
          type="text"
          placeholder="Enter your postcode"
        />
        <DateInput
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
  form: "mealSearch"
})(MealSearchForm);
