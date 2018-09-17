import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { DateInput, Search, LocationInput } from "../../../../themes/buttons.style";
import {StyledForm} from "./MealSearchForm.style"

const MealSearchForm = props => {
  const { handleSubmit } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <LocationInput
        name="postcode"
        component="input"
        type="text"
        placeholder="Enter your postcode"
      />
      <DateInput
        name="delivery-date"
        component="input"
        type="text"
        placeholder="Delivery Date"
      />
      <Search type="submit">Submit</Search>
    </StyledForm>
  );
};

MealSearchForm.propTypes = {
handleSubmit: PropTypes.func,
}


export default reduxForm({
  form: "mealSearch"
})(MealSearchForm);
