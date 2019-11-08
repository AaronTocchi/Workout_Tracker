const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post('/api/workouts/', function (req, res) {
    Workout.create({})
        .then(data =>
            res.json(data)
        )
        .catch(err => {
            res.json(err);
        });
    console.log(req.params)
    console.log(req.body)
})
router.put('/api/workouts/:id', function (req, res) {
    Workout.findOneAndUpdate(
        req.params.id,
        {
            $push:
                { exercises: req.body }
        }

    ).then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.json(err);
        });
    console.log("req.params: ", req.params)
    console.log("req.body: ", req.body)
})

router.get('/api/workouts/', function (req, res) {
    Workout.find({})
        .then(dbWorkout => {
            console.log("look make muh get: ", dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
})

module.exports = router;
