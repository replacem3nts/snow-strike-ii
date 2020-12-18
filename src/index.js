require('./db/mongoose');
const express = require('express');
const mountainRouter = require('./routers/mountain');

const app = express();
app.use(express.json());
app.use(mountainRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
