const Workout = require("../models")

module.exports = {
    addWorkout(req, res) {
        Workout.create({})
        .then((workout) => res.json(workout))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    addExercise(req, res) {
        Workout.findByIdAndUpdate(req.params.id,
            {$push: {exercises: req.body}}
            )
        .then(workout => res.json(workout))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    getWorkouts(req,res) {
        Workout.find({})
        .then((workout) => res.json(workout))
    }
}