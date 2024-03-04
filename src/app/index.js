const express = require('express');
const routes = require('../routes');

const app = express();
const port = process.env.EXPRESS_PORT;
const cors = require('cors');
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cors())

app.use('/money-mind/core', routes);
app.use(function (err, req, res, next) {
  console.log(err)
  res.status(500).send({message : 'Internal Server Error' })
})


app.listen(port || 3002, () => {
  console.log('The system is listening port', port || 3002);
});
