const router = require('express').Router();
const workoutController = require('../../controllers/workoutController');


router.route('/').get(workoutController.getWorkouts);
router.route('/').post(workoutController.addWorkout);
router.route('/:id').put(workoutController.addExercise);
router.route('/range').get(workoutController.getWorkoutsInRange);


module.exports = router;