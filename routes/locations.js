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
  totalElements: 3,
  totalPages: 1,
  page: 0,
  size: 20,
}
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(mockData);
});

router.get('/:id/details', function (req, res, next) {
  const id = req.params.id;
  const location = mockData.content.filter(loc => loc.id === id)
  res.json(location);
});

module.exports = router;
