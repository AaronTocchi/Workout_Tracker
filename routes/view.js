const router = require("express").Router();
const path = require("path");

router.get('/', function(req, res) {
    // If the user already has an account send them to the closet page
   
      res.sendFile(path.join(__dirname, "../public/index.html"));
  });

router.get('/exercise', function(req, res) {
    // If the user already has an account send them to the closet page
   
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

router.get('/stats', function(req, res) {
    // If the user already has an account send them to the closet page
   
      res.sendFile(path.join(__dirname, "../public/stats.html"));
  });


module.exports = router;
