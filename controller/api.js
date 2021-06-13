const router = require("express").Router();
const mongoose = require("mongoose")
const Workout = require("../models/workout.js");
const mongojs = require('mongojs')

router.post("/workouts", ({ body }, res) => {
    const workout = new Workout(body);
    workout.totalTime();
    
    Workout.create(workout)
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
    Workout.update({
        _id: mongojs.ObjectId(req.params.id)
    }, {
            $set: {
                exercises: req.body
            }
    })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/workouts/range", async (req, res) => {
    try {

        let range = await Workout.aggregate([
            {
                $addFields: {
                    totalduration: { $sum: "$exercises.duration" },
                    totalWeight: { $sum: "$exercises.weight" }
                }
            },
            
        ]).
            res.json(range);
        
    } catch {
        err => {
            res.status(400).json(err);
        }};
})

module.exports = router;
