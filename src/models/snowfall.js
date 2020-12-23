const mongoose = require('mongoose');

const snowfallSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    snowfall: {
      type: Number,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Mountain',
    },
  },
  {
    timestamps: true,
  }
);

const Snowfall = mongoose.model('Snowfall', snowfallSchema);

module.exports = Snowfall;
