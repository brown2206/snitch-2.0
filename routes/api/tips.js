const express = require('express');
const router = express.Router();

// Tip Model
const Tip = require('../../models/Tip');

// @route   GET api/tips
// @desc    Get All Tips
// @access  Public
router.get('/', (req, res) => {
    Tip.find()
        .sort({ date: -1 })
        .then(tips => res.json(tips))
});

// @route   POST api/tips
// @desc    Create a Tip
// @access  Public
router.post('/', (req, res) => {
    const newTip = new Tip({
        offense: req.body.offense,
        date: req.body.date,
        description: req.body.description,
        location: req.body.location,
        suspect: req.body.suspect
    });

    newTip.save().then(tip => res.json(tip));
});

// @route   DELETE api/tips/:id
// @desc    Delete a Tip
// @access  Public
router.delete('/:id', (req, res) => {
    Tip.findById(req.params.id)
        .then(tip => tip.remove().then(() => res.json({success: true}))
    )
    .catch(err => res.status(404).json({success: false}));
})

module.exports = router;
