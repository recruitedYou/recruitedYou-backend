const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require("express-validator");

//MODELS
const Profile = require('../models/Profile');
const User = require('../models/User');

//! @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({msg: `SERVER ERROR`});
  }
});

//! @route    POST api/profile
//! @desc     Create or update a user profile
//! @access   Private
 router.post('/', [auth, [
   check('status', "Status is Required").not().isEmpty(),
 ]],async (req, res) => {
   const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
    }
    //pull fields out
    const {
      location,
      bio,
      status,
    } = req.body;
    //build profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    try {
      let profile = await Profile.findOne({user: req.user.id})
      if(profile){
        //update
        profile = await Profile.findOneAndUpdate({user: req.user.id}, {$set: profileFields}, {new: true})
        return res.json(profile)
      }
      //create
      profile = new Profile(profileFields)

      await profile.save()
      res.json(profile)
    } catch (error) {
      console.error(error.message)
      res.status(500).json({msg: `SERVER ERROR`})
    }
   })
//! @route    GET api/profile
//! @desc     GET ALL profiles
//! @access   Public
router.get('/', async (req, res) => {
  try {
    const profile = await Profile.find().populate('user', ['name', 'avatar'])
    res.json(profile)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({msg: `SERVER ERROR`})
  }
})

//! @route    GET api/profile/user/:user_id
//! @desc     GET profile by id
//! @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.params.user_id}).populate('user', ['name', 'avatar']);
    if(!profile){
      return res.status(400).json({msg: `Profile not found`})
    }
    res.json(profile)
  } catch (error) {
    if(err.kind === 'ObjectId'){
      return res.status(400).json({msg: `Profile not found`})
    }
    console.error(error.message)
    res.status(500).json({msg: `SERVER ERROR`})
  }
})






module.exports = router