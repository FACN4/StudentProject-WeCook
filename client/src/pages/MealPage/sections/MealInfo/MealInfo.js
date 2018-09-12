import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Gallery} from "../../../../components"
import getMealInfo from "../../../../actions/getMealInfo";


class MealInfo extends Component {
  componentDidMount() {
    this.props.getMealInfo(1);
    console.log('component mounting');
  }

  render() {
    if (!this.props.mealInfo) return   <h1>Loading</h1>;
    const {meal_title} = this.props.mealInfo;
    return (
      <section>
        <h1>{meal_title}IT WORKS</h1>
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

MealInfo.propTypes = {
  getMealInfo: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  getMealInfo,
};

// const mealInfoResult = {
//   meal_title: 'Russian tomato sauce with shashlikee',
//   price: '5.00',
//   meal_scheduled_at: new Date('Thu Feb 08 2018 06:05:06 GMT+0200 (EET)'),
//   description: 'Robust lamb and onion kebabs steeped in a tenderizing seltzer and vinegar marinade are paired with a sauce of tomatoes, prunes, and herbs. All ingredients are sourced locally.',
//   remaining_portions: 15,
//   final_booking_at: new Date('Wed Feb 07 2018 06:05:06 GMT+0200 (EET)'),
//   ingredients:
//    ['Milk',
//      'Flour',
//      'Wallnut',
//      'Lamb',
//      'Parsley',
//      'Lemon juice',
//      'Dill',
//      'Onion',
//      'Sugar',
//      'Tomato',
//      'Chillie'],
//   tags: ['Kosher', 'Spicy'],
//   meal_image_url:
//    [{
//      mealUrl: 'https://user-images.githubusercontent.com/28222381/45268801-1163b100-b48b-11e8-85b0-d32b09a111e3.jpg',
//      isThumbnail: true,
//    },
//    {
//      mealUrl: 'https://user-images.githubusercontent.com/28222381/45268805-1c1e4600-b48b-11e8-932f-ddae68a9bd3c.jpg',
//      isThumbnail: false,
//    },
//    {
//      mealUrl: 'https://user-images.githubusercontent.com/28222381/45268810-37895100-b48b-11e8-8b5d-c6e8964b4f2b.jpg',
//      isThumbnail: false,
//    },
//    {
//      mealUrl: 'https://user-images.githubusercontent.com/28222381/45268814-4ff96b80-b48b-11e8-88ba-f9e7fa57dc22.jpg',
//      isThumbnail: false,
//    }],
// };

const mapStateToProps = ({mealInfo:mealInfoStore}) => ({
  mealInfo: mealInfoStore,
})

export default connect(mapStateToProps, mapDispatchToProps)(MealInfo);
