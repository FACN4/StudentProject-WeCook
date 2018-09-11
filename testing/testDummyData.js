const mealCardDataResult = {
  id: 1,
  meal_title: 'Russian tomato sauce with shashlikee',
  price: '5.00',
  final_booking_at: new Date('Wed Feb 07 2018 06:05:06 GMT+0200 (EET)'),
  remaining_portions: 15,
  meal_image_url: 'https://user-images.githubusercontent.com/28222381/45268801-1163b100-b48b-11e8-85b0-d32b09a111e3.jpg',
  cook_firstname: 'Samiyah',
  cook_image_url: 'https://user-images.githubusercontent.com/28222381/45268630-08251500-b488-11e8-94c4-7e664f5d45c9.jpg',
  av_star_rating: '4.5000000000000000',
  count_reviews: '2',
};

const mealInfoDataResult = {
  meal_title: 'Russian tomato sauce with shashlikee',
  price: '5.00',
  meal_scheduled_at: new Date('Thu Feb 08 2018 06:05:06 GMT+0200 (EET)'),
  description: 'Robust lamb and onion kebabs steeped in a tenderizing seltzer and vinegar marinade are paired with a sauce of tomatoes, prunes, and herbs. All ingredients are sourced locally.',
  remaining_portions: 15,
  final_booking_at: new Date('Wed Feb 07 2018 06:05:06 GMT+0200 (EET)'),
  ingredients:
   ['Milk',
     'Flour',
     'Wallnut',
     'Lamb',
     'Parsley',
     'Lemon juice',
     'Dill',
     'Onion',
     'Sugar',
     'Tomato',
     'Chillie'],
  tags: ['Kosher', 'Spicy'],
};

module.exports = { mealCardDataResult, mealInfoDataResult };
