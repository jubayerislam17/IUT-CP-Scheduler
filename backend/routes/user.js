const express = require('express');

//controller functions
const  { signupUser , loginUser, getCFHandle } = require ('../controllers/userController')

const router =  express.Router();

//get a single cf handle
router.get('/cfhandle/:id', getCFHandle);

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)


module.exports = router
