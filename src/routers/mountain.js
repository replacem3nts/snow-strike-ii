const express = require('express');
const router = new express.Router();

const Mountain = require('../models/mountain');

router.post('/mountains', async (req, res) => {
  const mountain = new Mountain(req.body);

  try {
    await mountain.save();
    res.status(201).send({ mountain });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
