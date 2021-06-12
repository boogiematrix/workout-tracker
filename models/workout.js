const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{

        name: {
            type: String,
            trim: true,
            required: "Enter a name for an exercise"
        },
        type: {
            type: String,
            trim: true,
            required: "Enter a workout type"
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        distanceTraveled: {
            type: Number,
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;