import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import getMealReviews from "../../../../actions/getMealReviews";

class MealPage extends Component {
  componentDidMount() {
    this.props.getMealReviews(this.props.mealId);
  }
  render() {
    if (!this.props.mealReviews.isFulfilled) return <h1>Loading</h1>;

    let mealReviews = [];
    let cookReviews = [];
    this.props.mealReviews.data.forEach((reviewEle,index)=> {
      let {mealId, star_rating, username, reviewed_at, review_msg} = reviewEle;
      let Review =
      (
        <article key={index}>
          <h2>{username}</h2>
          <h3>{star_rating}</h3>
          <div>{reviewed_at}</div>
          <div>{review_msg}</div>
        </article>
      )
      if (mealId === this.props.mealId){
        mealReviews = [...mealReviews, Review];
      } else {
        cookReviews = [...cookReviews,Review]
      }

    })

    return (
      <React.Fragment>
        <h1>Meal Reviews</h1>
        <div>{mealReviews}</div>
      </React.Fragment>
    );
  }
}

MealPage.propTypes ={
  getMealReviews: PropTypes.func,
  mealId: PropTypes.string
}

const mapStateToProps = ({ mealReviews }) => ({
  mealReviews: mealReviews
});

const mapDispatchToProps = {
  getMealReviews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealPage);
