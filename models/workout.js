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
                distance: {
                    type: Number,
                },
            },
        ]
    },
    {
        toJSON: {virtuals: true}
    }
    );

    workoutSchema.virtual("totalDuration").get(function() {
        return this.exercises.reduce((total, value) => {
            return total + value.duration;
        },0);
    });


const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout;


// should this follow the mongoose.model format and the mongoose.schema format?
