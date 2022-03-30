var express = require('express');
var router = express.Router();

const mockData = {
  content: [
    {
      name: "River City Library",
      number: "105647",
      id: "abcddef"
    },
    {
      name: "ABC Country School",
      number: "501428",
      id: "ghijckl"
    },
    {
      name: "Big City Board of Education",
      number: "985376",
      id: "msnopqr"
    },
    {
      name: "River City",
      number: "1056c47",
      id: "abcddsef"
    },
    {
      name: "Country School",
      number: "501428c",
      id: "ghijackl"
    },
    {
      name: "Big City Board of commerce",
      number: "9853s76",
      id: "msnocpqr"
    },
    {
      name: "Riverr City Library",
      number: "10564c7",
      id: "abcaddef"
    },
    {
      name: "ABCD Country School",
      number: "50142v8",
      id: "ghiajckl"
    },
    {
      name: "Biger City Board of Education",
      number: "9853c76",
      id: "msnaopqr"
    }
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

router.get('/search/:text', function (req, res, next) {
  const text = req.params.text !== '*' ? req.params.text.toLowerCase() : '';
  const newLocations = mockData.content.filter(loc => loc.name.toLowerCase().includes(text));
  const newMockData = { ...mockData, content: newLocations }
  res.json(newMockData);
});

module.exports = router;
