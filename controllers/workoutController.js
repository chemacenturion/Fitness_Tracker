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
    },
    getWorkoutsInRange(req, res) {
        Workout.aggregate([
          {
            $addFields: {
            totalDuration: {
              $sum: "$exercises.duration"
            }
          }
        },
    
          {
            $addFields: {
              totalWeight: {
                $sum: "$exercises.weight"
              }
            }
          }
    
         
      
      ])  
      .sort( { day: -1 } )
      .limit( 7 )
      .then((workouts) => res.json(workouts))
      .catch((err) => res.status(500).json(err))
  }
}