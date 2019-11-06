const router = require("express").Router();
const Workout = require("../models/workout.js");

router.put('/api/workouts/', function(req,res){
    console.log(req.params)
    console.log(req.body)
})


module.exports = router;
