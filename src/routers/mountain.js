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

router.get('/mountains', async (req, res) => {
  try {
    const mountains = await Mountain.find();
    res.send(mountains);
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/mountains/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const mountain = await Mountain.findById(_id);
    if (!mountain) {
      return res.status(404).send();
    }
    res.send(mountain);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
