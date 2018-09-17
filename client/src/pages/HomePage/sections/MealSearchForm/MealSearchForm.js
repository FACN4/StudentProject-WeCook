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
  state = {
    startDate: moment()
  };
  changeDate = date => {
    console.log(date);
    this.setState({
      startDate: date
    });
  };

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
          component={RenderDatePicker}
          selected={this.state.startDate}
          onChangeFunc={this.changeDate}
          placeholder="Delivery Date"
          dateFormat="DD/MM/YYYY"
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
