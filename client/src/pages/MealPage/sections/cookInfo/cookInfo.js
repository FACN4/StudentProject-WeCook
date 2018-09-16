import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
// import { Gallery } from "../../../../components";
import getCookInfo from "../../../../actions/getCookInfo";
// import CookInfoStyle from "../../../cookInfo/cookInfo.style";

class cookInfo extends Component {
  componentDidMount() {
    this.props.getCookInfo(this.props.mealId);
  }
  render() {
    if (!this.props.cookInfo.isFulfilled) return <h1>Loading</h1>;
    const {
      cook_firstname,
      cook_lastname,
      cook_summary,
      is_thumbnail
    } = this.props.cookInfo.data;
    const cookThumbnail = is_thumbnail;
    return (
      <section>
        <h1>About The Cook</h1>
        <div>
          <img src={cookThumbnail} alt="cook image" />
          <span>{(cook_firstname, cook_lastname)}</span>
          <span>{cook_summary}</span>
        </div>
        <button type="button">Contact The Cook </button>
      </section>
    );
  }
}
cookInfo.propTypes = {
  getCookInfo: propTypes.func,
  mealInfo: propTypes.shape({
    data: propTypes.shape({
      cook_firstname: propTypes.string,
      cook_lastname: propTypes.string,
      cook_summary: propTypes.string,
      is_thumbnail: propTypes.arr
    }),
    isFulfilled: propTypes.bool
  }),
  mealId: propTypes.string
};
const mapStateToProps = ({ cookData }) => ({
  cookInfo: cookData
});
const mapDispatchToProps = {
  getCookInfo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cookInfo);
