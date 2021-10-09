const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    name: {
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
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;