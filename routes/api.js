const router = require("express").Router();
const Workout = require("../models/workout.js");

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

router.put('/api/workouts/:id', function ({ body, params }, res) {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push:
                { exercises: body }
        }
    ).then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.json(err);
        });
    console.log("req.params: ", params)
    console.log("req.body: ", body)
})


module.exports = router;
