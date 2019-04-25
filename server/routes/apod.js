const router = require('express').Router()
const ApodController = require('../controllers/apodController')
const { authenticate } = require('../middlewares/authenticate')

router.use(authenticate)

router.post('/', ApodController.createApod)
router.get('/', ApodController.findAllApod)
router.get('/:id', ApodController.findOneApod)
router.delete('/:id', ApodController.deleteApod)
router.put('/:id', ApodController.updateApod)

module.exports = router