const mongoose = require('mongoose');
const Mountain = require('../../src/models/mountain');

const mountainOneId = new mongoose.Types.ObjectId();
const mountainOne = {
  _id: mountainOneId,
  name: 'Jackson Hole',
  zipcode: '83025',
};

const mountainTwo = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Snowbird',
  zipcode: '84092',
};

const mountainThree = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Telluride',
  zipcode: '81435',
};

const resetDB = async () => {
  await Mountain.deleteMany();
  await new Mountain(mountainOne).save();
  await new Mountain(mountainTwo).save();
  await new Mountain(mountainThree).save();
};

module.exports = {
  mountainOneId,
  mountainOne,
  mountainTwo,
  mountainThree,
  resetDB,
};
