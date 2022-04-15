var express = require('express');
var router = express.Router();

const mockData = {
  content: [
    {
      name: "River City Library",
      number: "105647",
      id: "abcddef", 
      statementId: "8484r8f89u934ru98",
      statementType: "Check"
    },
    {
      name: "ABC Country School",
      number: "501428",
      id: "ghijckl", 
      statementId: "asdff89u9sdfccfa",
      statementType: "EPayment"
    },
    {
      name: "Big City Board of Education",
      number: "985376",
      id: "msnopqr", 
      statementId: "98484r8fcase89u934ru980",
      statementType: "Check"
    },
  ],
  totalElements: 9,
  totalPages: 1,
  page: 0,
  size: 20,
}
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(mockData);
});

router.get('/:number', function(req, res, next) {
  const number = req.params.number;
  const foundLocation = mockData.content.find(loc => loc.number === number);
  res.json(foundLocation);
});

router.get('/search/:text', function (req, res, next) {
  const text = req.params.text !== '*' ? req.params.text.toLowerCase() : '';
  const newLocations = mockData.content.filter(loc => loc.name.toLowerCase().includes(text));
  const newMockData = { ...mockData, content: newLocations }
  res.json(newMockData);
});

module.exports = router;
