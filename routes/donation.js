const express = require('express');
const router = express.Router();
const donation = require('../services/donation');


router.post('/', async function(req, res, next) {
    try {
      res.json(await donation.create(req.body));
    } catch (err) {
      console.error(`Error while creating donation`, err.message);
      next(err);
    }
  });
  
  

module.exports = router;


