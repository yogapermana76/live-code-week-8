const Apod = require('../models/apod')

class ApodController {
  static createApod(req, res) {
    Apod.create({
      date: req.body.date,
      title: null,
      url: null,
      mediaType: null,
      description: null
      
    })
    .then(apod => {
      res.status(201).json(apod)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static findAllApod(req, res) {
    Apod.find({})
      .then(apods => {
        res.status(200).json(apods)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findOneApod(req, res) {
    Apod.findById(req.params.id)
      .then(apod => {
        res.status(200).json(apod)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static deleteApod(req, res) {
    Apod.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json('success deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static updateApod(req, res) {
    Apod.findByIdAndUpdate(req.params.id, ...req.body)
      .then(() => {
        res.status(200).json('success updated')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = ApodController