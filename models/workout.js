const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
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
                distance: {
                    type: Number,
                },
            },
        ]
    });

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout;


// should this follow the mongoose.model format and the mongoose.schema format?
