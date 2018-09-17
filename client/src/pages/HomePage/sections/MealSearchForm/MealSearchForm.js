import React from "react";
import { Field, reduxForm } from 'redux-form'

const MealSearchForm = props => {
  const { handleSubmit } = props
  return  (
  <form onSubmit={handleSubmit}>
        <Field name="postcode" component="input" type="text" placeholder="Enter your postcode"/>
        <Field name="delivery-date" component="input" type="text" placeholder="Delivery Date"/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'mealSearch'
})(MealSearchForm)


// const HomeForm = () => {
//   return (
//     <form>
//       <input type="text" name="postcode" placeholder="Enter your postcode"/>
//       <input type="text" name="delivery-date" placeholder="Delivery Date"/>
//     </form>
//   );
// };
