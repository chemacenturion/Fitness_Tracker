const { Schema, model } = require('mongoose');
const exerciseSchema = require('./Exercise');


const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        
        exercises: [exerciseSchema]
    });


const Workout = model('Workout', WorkoutSchema)

module.exports = Workout;