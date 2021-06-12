const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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
        type: String,
    },
    distanceTraveled: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;