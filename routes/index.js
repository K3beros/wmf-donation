var express = require('express');
var router = express.Router();

const submitDomation = require('../controller/donation')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/donation', async (req, res, next) => {
  
  try {
    //let {lastName, firstName, address, city, state, country, postalcode, phone, email, contact, payment, freqdonation, amount, comment} = req.body;
    res.json(await submitDomation.submitDonation(req.body))
  } catch (error) {
    console.error('Error while posting donation:', err.message)
    next(err)
  }
})
module.exports = router;
