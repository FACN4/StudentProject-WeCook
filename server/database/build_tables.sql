BEGIN;

DROP TABLE IF EXISTS users,cook_info, cook_images, reviews,meals, meal_images, meal_orders CASCADE;

SET TIME ZONE 'GMT';

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) UNIQUE NOT NULL,
  password VARCHAR(80) NOT NULL,
  email VARCHAR(80) UNIQUE NOT NULL,
  phone_no VARCHAR(20) NOT NULL,
  delivery_house_no INTEGER NOT NULL,
  delivery_post_code VARCHAR(10) NOT NULL,
  acc_created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE cook_info(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  cook_firstname VARCHAR (50) NOT NULL,
  cook_lastname VARCHAR (50) NOT NULL,
  cook_summary VARCHAR(200) NOT NULL,
  cook_description VARCHAR(500) NOT NULL,
  kitchen_house_no INTEGER NOT NULL,
  kitchen_post_code VARCHAR(10) NOT NULL,
  council_certified BOOLEAN NOT NULL,
  audited_by_wecook TIMESTAMP WITH TIME ZONE NOT NULL,
  lvl2_food_handling BOOLEAN NOT NULL,
  delivery_range_km REAL NOT NULL,
  became_cook_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE TABLE cook_images(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  cook_image_url VARCHAR(2083) NOT NULL,
  is_thumbnail BOOLEAN DEFAULT FALSE
);

CREATE TABLE meals(
  id SERIAL PRIMARY KEY,
  meal_title VARCHAR(50) NOT NULL,
  cook_user_id INTEGER REFERENCES users(id) NOT NULL,
  max_portions INTEGER,
  remaining_portions INTEGER CHECK (remaining_portions<=max_portions),
  ingredients VARCHAR(20) ARRAY NOT NULL,
  tags VARCHAR(20) ARRAY NOT NULL,
  price NUMERIC(5,2) NOT NULL,
  description VARCHAR(500) NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  meal_scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  final_booking_at TIMESTAMP WITH TIME ZONE NOT NULL CHECK (final_booking_at <= meal_scheduled_at)
);

CREATE TABLE meal_orders(
  id SERIAL PRIMARY KEY,
  cook_user_id INTEGER REFERENCES users(id) NOT NULL,
  customer_user_id INTEGER REFERENCES users(id) NOT NULL,
  meal_id INTEGER REFERENCES meals(id) NOT NULL,
  ordered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  portion_count INTEGER NOT NULL CHECK (portion_count>0),
  delivery_house_no INTEGER NOT NULL,
  delivery_post_code VARCHAR(10) NOT NULL
);

CREATE TABLE reviews(
  id SERIAL PRIMARY KEY,
  meal_order_id INTEGER REFERENCES meal_orders(id) NOT NULL,
  cook_user_id INTEGER REFERENCES users(id) NOT NULL,
  customer_user_id INTEGER REFERENCES users(id) NOT NULL,
  meal_id INTEGER REFERENCES meals(id) NOT NULL,
  reviewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  star_rating INTEGER CHECK (star_rating >= 0 AND star_rating <6),
  review_msg VARCHAR(500)
);

CREATE TABLE meal_images(
  id SERIAL PRIMARY KEY,
  meal_id INTEGER REFERENCES meals(id) NOT NULL,
  meal_image_url VARCHAR(2083) NOT NULL,
  is_thumbnail BOOLEAN DEFAULT FALSE
);

COMMIT;
