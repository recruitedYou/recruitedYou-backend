const express = require('express');
const router = express.Router();
const Job = require('../models/Jobs')

router.get('/', async (req, res) => {
  try {
    let jobs = await Job.find()
    res.json(jobs)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({msg: `GET ERROR`})
  }
})

router.post('/', async (req, res) => {
  try {
    const newJob = new Job({
      district: req.body.district,
      school: req.body.school,
      grade: req.body.grade,
      subject: req.body.subject
    })
    // const newJob = new Job(req.body)
    const save = await newJob.save()
    res.json(save)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({msg: `POST JOB ERROR`})
  }
})

router.put('/:id', async (req, res) => {
  try {
    const singleJob = await Job.findById(req.params.id)
    if(!singleJob) {
      return res.status(404).json({msg: `NOT FOUND`})
    } 

    singleJob.district = req.body.district ,
    singleJob.school = req.body.school,
    singleJob.grade = req.body.grade,
    singleJob.subject = req.body.subject

    await singleJob.save()
    return res.json(singleJob)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({msg: `PUT ERROR JOBS`})
  }
} )
router.delete('/:id', async(req,res) => {
  try {
    const job = await Job.findById(req.params.id)
    if(!job) res.status(404).json({msg: `Job post not found`})
    await job.remove()
    res.json({msg: `DELETE ERROR JOBS`})
  } catch (error) {
    
  }
})
module.exports = router