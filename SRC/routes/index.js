// ES6 way
import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) =>
  res.status(200).json({ message: 'Welcome to EXPRESS API Template ::)'})
);

export default indexRouter;

// ES5 way below
// var express = require('express');
// var router = express.Router();
// router.get('/', function(req, res, next) {
//   return res.status(200).json({ message: 'Welcome to Express API template' });
// });
// module.exports = router;