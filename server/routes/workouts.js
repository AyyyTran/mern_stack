const express = require('express');
const Workout = require('../models/workoutModel');
const router = express.Router();

//GET all workouts
router.get('/', (req, res) => {
  res.json({msg: 'GET all workouts'});
});

//GET single workout
router.get('/:id', (req, res) => {
  res.json({msg: 'GET single workouts'});
});

// POST a new workout
router.post('/', async (req, res) => {
  const {title, reps, load} = req.body;

  try {
    const workout = await Workout.create({title, reps, load});
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({err: err.message});
  }
  res.json({msg: 'POST new workout'});
});

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({msg: 'DELETE new workout'});
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({msg: 'UPDATE new workout'});
});

module.exports = router;
