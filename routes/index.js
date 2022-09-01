var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const testEnv = process.env.DOCKER_TEST_ENV_VAR;

  res.send(`Working test environment variable: ${testEnv}`);
});

module.exports = router;
