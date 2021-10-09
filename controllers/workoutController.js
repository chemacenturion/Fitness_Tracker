const db = require("../models")

const workoutFunctions = {
    addWorkout: function (req, res) {
        db.Workout.create({})
        .then((workout) => res.json(workout))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    addExercise: function (req, res) {
        db.Workout.findByIdAndUpdate(req.params.id,
            {$push: {exercises: req.body}}
            )
        .then(workout => res.json(workout))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    getWorkouts: function (req,res) {
          db.Workout.aggregate([
            {
              $addFields: {
              totalDuration: {
                $sum: "$exercises.duration"
              }
            }
          },
        ])
        .then((workout) => res.json(workout))
    },
    getWorkoutsInRange: function (req, res) {
        db.Workout.aggregate([
          {
            $addFields: {
            totalDuration: {
              $sum: "$exercises.duration"
            }
          }
        },
      ])  
      .sort( { day: -1 } )
      .limit( 7 )
      .then((workouts) => res.json(workouts))
      .catch((err) => res.status(500).json(err))
  }
}

module.exports = workoutFunctions;