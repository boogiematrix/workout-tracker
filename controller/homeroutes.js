const router = require("express").Router();
const mongoose = require("mongoose")
const path = require("path")
const Workout = require("../model/workout.js");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

module.exports = router