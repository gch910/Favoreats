const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { requireAuth } = require("../auth");
const { loginUser, logoutUser } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");

router.get('/visited', requireAuth, asyncHandler(async(req, res) => {
    const user = req.session.auth.userId;
    const visited = await db.User.findAll({
      include: [db.Restaurant, { model: db.Restaurant, as: "visited" }],
      where: {
        id: user,
      },
    });
   const visitedRestaurants = visited[0].visited

    res.render('visited', {
        visitedRestaurants

    })
}));


  //GET route for 'want-to-visit' restaurants
router.get(
  "/want-to-visit",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    
    const user = req.session.auth.userId;
    const wantVisit = await db.User.findAll({
      include: [db.Restaurant, { model: db.Restaurant, as: "visited" }],
      where: {
        id: user,
      },
    });
    
    const currentUser = wantVisit[0];
    const wantToVisit = wantVisit[0].Restaurants;

    res.render("want-to-visit", {
      currentUser,
      wantToVisit,
    });
  })
);

router.get('/', requireAuth, asyncHandler(async(req, res) => {
    const restaurants = await db.Restaurant.findAll()

    const showRestaurants = restaurants

    res.render('restaurants', {
        showRestaurants
    })
}))

router.get('/:id', asyncHandler(async(req, res) => {
    const restaurantId = req.params.id
    const restaurant = await db.Restaurant.findByPk(restaurantId, {
        include: [db.Comment, db.Rating],
    })

    const restaurantComments = restaurant.Comments //[0].comment
    const restaurantRatings = restaurant.Ratings 

   

    res.render('current-restaurant', {
        restaurant,
        restaurantComments,
        restaurantRatings

    })
}))

module.exports = router;

   




