var express = require('express');
var router = express.Router();
var ClientRouter = require('./clientsRoutes')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login');
});

router.use(ClientRouter);

module.exports = router;
