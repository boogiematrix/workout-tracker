const router = require("express").Router();
const mongoose = require("mongoose")
const Workout = require("../models/workout.js");

router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/workouts/bulk", ({ body }, res) => {
    Workout.insertMany(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/workouts", (req, res) => {
    Workout.find({})
        //.sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/workouts/:id", (req, res) => {

});

router.get("/workouts/range", (req, res) => {

})

module.exports = router;
