import React from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
=======
import PropTypes from 'prop-types';
>>>>>>> 9ebd10bb3fd3e223452d539e80a3f5ff03b2882a
import { MoneyButton } from "../../components";
import MealInfo from "./sections/MealInfo/MealInfo";

const MealPage = props => {
  return (
    <React.Fragment>
<<<<<<< HEAD
      <MealInfo mealId={props.match.params.mealId} />
      <MoneyButton />
    </React.Fragment>
  );
};
=======
      <MealInfo mealId={props.match.params.mealId}/>
      <MoneyButton />
    </React.Fragment>
  );
}
>>>>>>> 9ebd10bb3fd3e223452d539e80a3f5ff03b2882a

MealPage.propTypes = {
  match: PropTypes.object
};

export default MealPage;
