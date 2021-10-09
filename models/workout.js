const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        
        exercises: [
            {   name: {
                    type: String,
                },
                type:  {
                    type: String,
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                duration: {
                    type: Number,
                },
                distance_traveled: {
                    type: Number,
                },
            },
        ]
    });


const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout;


// should this follow the mongoose.model format and the mongoose.schema format?
