BEGIN;

INSERT INTO users (username, password, email, phone_no, delivery_house_no, delivery_post_code) VALUES ('Mama Afifi', 'wouldBeHashed','foundersandeater@gmail.com', '07787392474', 11, 'N19 4AH'),('testUser2','wouldBeHashed', 'fakeemail@test.com','07787392473',14, 'N2 0EZ');

INSERT INTO cook_info (user_id, cook_firstname,cook_lastname, cook_summary, cook_description, kitchen_house_no, kitchen_post_code, council_certified, audited_by_wecook, lvl2_food_handling, delivery_range_km) VALUES (1,'Samiyah', 'Afifi', 'Delicious recipies passed down 3 generations of Afifi','I love cooking. I’ve been cooking with my family for over 30 years. I use WeCook to maximise the time spent with my family whilst also earning some income from extra dinner portions.', 11, 'N19 4AH', true, '2018-01-08 04:05:06 GMT',true, 1.0);

INSERT INTO cook_images (user_id, cook_image_url, is_thumbnail) VALUES (1,'https://user-images.githubusercontent.com/28222381/45268630-08251500-b488-11e8-94c4-7e664f5d45c9.jpg',true),(1,'https://user-images.githubusercontent.com/28222381/45268635-2db21e80-b488-11e8-95c3-cf0569d3d045.jpg',false),(1,'https://user-images.githubusercontent.com/28222381/45268646-3c98d100-b488-11e8-82a5-cebcf5b23b24.jpg',false),(1,'https://user-images.githubusercontent.com/28222381/45268673-bc26a000-b488-11e8-8b53-478f8b669842.jpg',false);

INSERT INTO meals (meal_title, cook_user_id, max_portions, remaining_portions, ingredients, tags, price, description, meal_scheduled_at, final_booking_at) VALUES ('Russian tomato sauce with shashlikee', 1, 20, 15, '{Milk, Flour, Wallnut, Lamb, Parsley, Lemon juice, Dill, Onion, Sugar, Tomato, Chillie}', '{Kosher, Spicy}', 5.00, 'Robust lamb and onion kebabs steeped in a tenderizing seltzer and vinegar marinade are paired with a sauce of tomatoes, prunes, and herbs. All ingredients are sourced locally.', '2018-02-08 04:05:06 GMT', '2018-02-07 04:05:06 GMT');

INSERT INTO meal_orders(cook_user_id, customer_user_id, meal_id, portion_count, delivery_house_no, delivery_post_code) VALUES (1,2,1,1,14,'N2 0EZ'),(1,2,1,1,14,'N2 0EZ');

INSERT INTO reviews (meal_order_id, cook_user_id, customer_user_id, meal_id, star_rating, review_msg) VALUES (1,1,2,1,5,'I love Mama Afifi’s food. This dish is one of my favourites. A lovely member of our community. Will definitely be going back!'),(2,1,2,1,4,'I love Mama Afifi’s food. This dish is one of my favourites. A lovely member of our community. Will definitely be going back!');

INSERT INTO meal_images (meal_id, meal_image_url, is_thumbnail) VALUES (1,'https://user-images.githubusercontent.com/28222381/45268801-1163b100-b48b-11e8-85b0-d32b09a111e3.jpg',true),(1,'https://user-images.githubusercontent.com/28222381/45268805-1c1e4600-b48b-11e8-932f-ddae68a9bd3c.jpg',false),(1,'https://user-images.githubusercontent.com/28222381/45268810-37895100-b48b-11e8-8b5d-c6e8964b4f2b.jpg',false),(1,'https://user-images.githubusercontent.com/28222381/45268814-4ff96b80-b48b-11e8-88ba-f9e7fa57dc22.jpg',false);



COMMIT;
