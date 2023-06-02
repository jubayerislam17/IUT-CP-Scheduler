const express = require('express');

const router =  express.Router();

//get all cf ratings
router.get('/', (req, res)=>{
    res.json({mssg: 'get all students cf ratings'})
})

//get single cf ratings
router.get('/:id', (req, res)=>{
    res.json({mssg: 'get a sigle  cf rating'})
})

//post a single cf ratings
router.post('/', (req, res)=>{
    res.json({mssg: 'post a sigle  cf rating'})
})

//delete a single cf ratings
router.delete('/:id', (req, res)=>{
    res.json({mssg: 'delete a sigle  cf rating'})
})

//update a single cf ratings
router.post('/:id', (req, res)=>{
    res.json({mssg: 'update a sigle  cf rating'})
})

module.exports = router