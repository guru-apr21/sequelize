const express = require('express');
const app = express();
const server = require('http').createServer(app);
const db = require('./config/database');
const userRouter = require('./routes/users');

app.use(express.json());
app.use('/api/users', userRouter);

(async () => {
  try {
    await db.sync();
  } catch (err) {
    console.log(err);
  }
})();

const PORT = process.env.PORT || 5000;
server.listen(5000, () => console.log(`Listening on port ${PORT}`));
