const express = require('express');
const router = express.Router();

const Subscriber = require('../models/subscribers');

// create a subscriber
router.post('/create', async (req, res) => {
    const subscriber = new Subscriber({
        name : req.body.name,
        channel: req.body.channel
    })
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


// get all
router.get('/list', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.status(200).json(subscribers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber)
})

async function getSubscriber(req, res, next){
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null)
        {
            res.status(404).json({message: "Cannot find subscriber"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    res.subscriber = subscriber;
    next()
}

module.exports = router;