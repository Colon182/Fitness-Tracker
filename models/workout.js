const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      // For the schema of this attribute, define type and default
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      // Schema for each item in exercises array
      {
        type: {
          // TODO: For the schema of this attribute, define type and trim and required
          type: String,
          trim: true,
          required: "Please specify resistance and cardio",
        },
        name: {
          // TODO: For the schema of this attribute, define type and trim and required
          type: String,
          trim: true,
          required: "Workout name is required",
        },
        duration: {
          // TODO: For the schema of this attribute, define type as number and its required
          type: Number,
          required: true,
        },
        weight: {
          // TODO: For the schema of this attribute, define type as number
          // type: Number,
        },
        reps: {
          // TODO: For the schema of this attribute, define type as number
          // type: Number,
          
        },
        sets: {
          // TODO: For the schema of this attribute, define type as number
          // type: Number,
        },
        distance: {
          // TODO: For the schema of this attribute, define type as number
          // type: Number,
        },
      },
    ],
  },

);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
