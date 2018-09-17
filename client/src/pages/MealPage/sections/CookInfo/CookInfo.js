import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import getCookInfo from "../../../../actions/getCookInfo";

class CookInfo extends Component {
  componentDidMount() {
    this.props.getCookInfo(this.props.mealId);
  }
  render() {
    console.log(this.props);
    if (!this.props.cookInfo.isFulfilled) return <h1>Loading</h1>;
    const {
      cook_firstname,
      cook_lastname,
      cook_summary,
      cook_description,
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
          <span>{cook_description}</span>
        </div>
        <button type="button">Contact The Cook </button>
      </section>
    );
  }
}
CookInfo.propTypes = {
  getCookInfo: PropTypes.func,
  mealId: PropTypes.string,
  cookInfo: PropTypes.shape({
    data: PropTypes.shape({
      cook_firstname: PropTypes.string,
      cook_lastname: PropTypes.string,
      cook_summary: PropTypes.string,
      cook_description: PropTypes.string,
      is_thumbnail: PropTypes.arr
    }),
    isRejected: PropTypes.bool,
    isFulfilled: PropTypes.bool,
    isPending: PropTypes.bool,
    error: PropTypes.string
  })
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
)(CookInfo);
