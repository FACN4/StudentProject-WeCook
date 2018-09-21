# <img src="https://i.imgur.com/HKcTANY.png=200x" alt="WeCook" width="300" />

WeCook is a platform to connect people who love to cook, with hungry customers in their local community.

Demo

Heroku Link: <a href="https://we-cook.herokuapp.com">WeCook</a>

## Design Week

We already had an idea of the audience's problem and design week allowed us to:

- Further understand our target audience(s) and their core needs
- Define the correct user journey
- Build a prototype and a consistent design
- Test the app with consumers

### Step 1. Design Thinking & User Story

![](https://i.imgur.com/X9Xzfbo.png)

Defining the user(s) and their problems clarified our thinking about what features were essential for building our MVP. We realised we have two distinct groups of users - cooks and customers.

We decided to focus on the customer user journey and in particular the problem:

> I am a busy professional who seeks home cooked food for my family but often don’t have the time to cook myself.

So our MVP journey became:

> As a user I want to be able to see the meals available in my area on my chosen delivery date, further information about the meals, add them to my basket and checkout.

### Step 2. Inspiration

![](https://i.imgur.com/mxmc1sg.png)

We used Dribbble and secondary research to identfy a number of designs that inspired us. The clear consensus was that the team wanted:

- **A clean interface** - easy to use, well structued and also gives the user a sense of 'cleanliness'.

- **Images at the heart of the design** - pictures of the meal and the cooks should be central to the design to create trust and a better UX.

### Step 3. Greyscale Wireframes

The next step was to build greyscale wireframes for the customer journey we identified for our MVP.

For example, for our meal list page:

<img src="https://i.imgur.com/C7cVvUD.png" alt="drawing" width="300" />

This allowed us to understand what information should be on a page, what is the most important information and where it should be positioned.

### Step 4. Prototype

We then took our greyscale wireframes and added a colour scheme to them. Creating the correct colour pallete was essential for our design. We wanted our colours to demonstrate cleanliness (white) and freshness (blue and green)

<img src="https://i.imgur.com/seS5N0U.jpg" alt="drawing" width="300" />

We used <a href="https://flatuicolors.com/">Flat UI Colors</a>, <a href="http://colorpalettes.net/">Color Palettes</a> and <a href="http://www.0to255.com/">0 to 255</a> in order to find the correct column scheme leading to <a href="https://www.figma.com/proto/D4zqWG20m9DLnlgYVVr2iwNa/WeCook-Designs?node-id=0%3A1&scaling=scale-down">our Figma prototype</a>

### Step 5. User Testing

We then took the <a href="https://www.figma.com/proto/D4zqWG20m9DLnlgYVVr2iwNa/WeCook-Designs?node-id=0%3A1&scaling=scale-down">Figma prototype</a> to the streets of Nazareth for user testing to get feedback on the business concept and the design.

We received some valuable insights, both positive and negative, notably:

| Strengths                                                                        | Weaknesses                                                    |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Like the community aspect of the idea                                            | Important to build trust between customers and cooks          |
| The design was received well                                                     | Visuals should be even more important in the design           |
| Most said they would be interested in using the app either as a cook or customer | Allergy & Reglious food concerns should be clear in meal tags |

We then iterated on our design to address the concerns highlighted in the user testing:

1.  **Trust** - Reviews and imagery are key to building trust. Also important to give cook guidelines on how to write their description to build empathy.

2.  **Visuals** - We added a large gallery component to the original designs for the meal and cook information pages.

3.  **Food Concerns** - We added clear tagging on the meal information page for allergy and relgious information and also functionality to message the cook.

A full overview of the user testing insights can be found <a href="https://github.com/FACN4/StudentProject-WeCook/issues/1">here</a>

## The Build

### Tech Stack

We used the following technology in our project:

- React
- Redux
- Express
- PGSQL
- Promises
- Flexbox and Grid
- Webpack
- ES6/7 & Babel
- Travis
- Stripe Payments

### Database Schema

The database for our projects includes the following 7 tables and keys:

<img src="https://user-images.githubusercontent.com/28222381/45737762-5f995280-bbf7-11e8-8dae-b6892e224da6.png" alt="Schema" width="300" />

## Future Features

With a little bit more time we would add the following to WeCook:

- Desktop design
- Photo optimization
- Error handling
- Testing
- Cook section
- Admin section ( for internal team )
