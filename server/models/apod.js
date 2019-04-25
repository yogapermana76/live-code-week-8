const mongoose = require('mongoose')
const Schema = mongoose.Schema
const axios = require('axios')

let ax = axios.create({
  baseURL: `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
})

const apodSchema = new Schema({
  date: {
    type: String,
    required: [true, 'please fill date']
  },
  title: String,
  url: String,
  mediaType: String,
  description: String
})

apodSchema.pre('save', function(next) {
  ax.get(`&date=${this.date}`)
      .then(({ data }) => {
        console.log(data)
        this.title = data.title
        this.url = data.url
        this.mediaType = data.mediaType
        this.description = data.explanation
      })
      .catch(err => {
        console.log(err)
      })
  next();
});

const Apod = mongoose.model('Apod', apodSchema)

module.exports = Apod