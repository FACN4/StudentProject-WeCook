const mealCardResult = {
  id: 1,
  meal_title: 'Russian tomato sauce with shashlikee',
  price: '5.00',
  meal_scheduled_at: new Date('Tues Jan 1 2019 11:05:06 GMT+0300 (EEST)'),
  final_booking_at: new Date('Tues Jan 1 2019 06:05:06 GMT+0300 (EEST)'),
  remaining_portions: 15,
  meal_image_url:
    'https://user-images.githubusercontent.com/28222381/45268801-1163b100-b48b-11e8-85b0-d32b09a111e3.jpg',
  cook_firstname: 'Samiyah',
  cook_image_url:
    'https://user-images.githubusercontent.com/28222381/45268630-08251500-b488-11e8-94c4-7e664f5d45c9.jpg',
  avg_star_rating: '4.0000000000000000',
  count_reviews: '3',
};

const mealInfoResult = {
  meal_title: 'Russian tomato sauce with shashlikee',
  price: '5.00',
  meal_scheduled_at: new Date('Fri Sep 21 2018 11:05:06 GMT+0300 (EEST)'),
  description:
    'Robust lamb and onion kebabs steeped in a tenderizing seltzer and vinegar marinade are paired with a sauce of tomatoes, prunes, and herbs. All ingredients are sourced locally.',
  remaining_portions: 15,
  final_booking_at: new Date('Fri Sep 21 2018 06:05:06 GMT+0300 (EEST)'),
  ingredients: [
    'Milk',
    'Flour',
    'Wallnut',
    'Lamb',
    'Parsley',
    'Lemon juice',
    'Dill',
    'Onion',
    'Sugar',
    'Tomato',
    'Chillie',
  ],
  tags: ['Kosher', 'Spicy'],
  meal_image_url: [
    {
      mealUrl:
        'https://user-images.githubusercontent.com/28222381/45268801-1163b100-b48b-11e8-85b0-d32b09a111e3.jpg',
      isThumbnail: true,
    },
    {
      mealUrl:
        'https://user-images.githubusercontent.com/28222381/45268805-1c1e4600-b48b-11e8-932f-ddae68a9bd3c.jpg',
      isThumbnail: false,
    },
    {
      mealUrl:
        'https://user-images.githubusercontent.com/28222381/45268810-37895100-b48b-11e8-8b5d-c6e8964b4f2b.jpg',
      isThumbnail: false,
    },
    {
      mealUrl:
        'https://user-images.githubusercontent.com/28222381/45268814-4ff96b80-b48b-11e8-88ba-f9e7fa57dc22.jpg',
      isThumbnail: false,
    },
  ],
};

const cookInfoResult = {
  cook_firstname: 'Samiyah',
  cook_summary: 'Delicious recipies passed down 3 generations of Afifi',
  cook_image_url:
    'https://user-images.githubusercontent.com/28222381/45268630-08251500-b488-11e8-94c4-7e664f5d45c9.jpg',
  count_reviews: '3',
  av_reviews: '4.0000000000000000',
};
const mealReviewsResult = [
  {
    meal_id: 1,
    username: 'testUser2',
    star_rating: 5,
    reviewed_at: 'Date Not Static',
    review_msg:
      'I love Mama Afifi’s food. This dish is one of my favourites. A lovely member of our community. Will definitely be going back!',
  },
  {
    meal_id: 1,
    username: 'testUser2',
    star_rating: 4,
    reviewed_at: 'Date Not Static',
    review_msg:
      'I love Mama Afifi’s food. This dish is one of my favourites. A lovely member of our community. Will definitely be going back!',
  },
  {
    meal_id: 2,
    username: 'testUser2',
    star_rating: 3,
    reviewed_at: 'Date Not Static',
    review_msg: 'What a meal!!!',
  },
];

const userDetails = {
  username: 'Denis',
  password: 'willBeHashed',
  email: 'foundersandeaters@gmail.com',
  phoneNo: '07763828285',
  houseNo: 13,
  postCode: 'N2 0EZ',
};

module.exports = {
  mealCardResult,
  mealInfoResult,
  cookInfoResult,
  mealReviewsResult,
  userDetails,
};
