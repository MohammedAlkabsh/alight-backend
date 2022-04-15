var express = require('express');
var router = express.Router();

const invoicesData = [
  {
    "id": "8484r8f89u934ru98",
    "statementNumber": "INV-98765-202110",
    "statementDate": "09/28/2021",
    "premiumAmount": 2900000.00,
    "previousBalance": 0.00,
    "adjustmentAmount": 0.00,
    "paymentDueDate": "10/07/2021",
    "paymentRecievedDate": "",
    "statementCycle": "October 2021",
    "premiumCalculationDate": "09/18/2021",
    "nextstatementAvailableDate": "10/29/2021",
    "statementAmount": 2900000.00,
    "paidAmount": 0.00,
    "balanceAmount": 0.00,
    "isStatementViewed": false,
    "isStatementSubmitted": false,
    "isStatementPaidInFull": false,
    "statementSubmissionDate": "10/5/2021",
    "statementSubmissionDueDate": "10/06/2021",
    "statementViewedDate": "",
    "isPaymentMade": false,
    "participantListSignedUrl": '/',
    "paymentsReceived": [
        {
            "id": '234vdrr3ef34234',
            "referenceNumber": "DE71510CA48E",
            "amount": 2000000.00,
            "status": "PENDING",
            "invoiceId": 8484882828,
            "paymentDate": "10/04/2021"
        },
        {
            "id": 'jvssdjf98u9f8wej9',
            "referenceNumber": "DE71510CA47E",
            "amount": 1800000.00,
            "status": "RECEIVED",
            "invoiceId": '463453453456',
            "paymentDate": "10/02/2021"
        },
    ]
  },
  {
    "id": "asdff89u9sdfccfa",
    "statementNumber": "INV-98765-202110",
    "statementDate": "10/25/2022",
    "premiumAmount": 2900000.00,
    "previousBalance": 0.00,
    "adjustmentAmount": 0.00,
    "paymentDueDate": "11/07/2022",
    "paymentRecievedDate": "",
    "statementCycle": "October 2022",
    "premiumCalculationDate": "10/15/2022",
    "nextstatementAvailableDate": "11/29/2022",
    "statementAmount": 3900000.00,
    "paidAmount": 0.00,
    "balanceAmount": 0.00,
    "isStatementViewed": false,
    "isStatementSubmitted": false,
    "isStatementPaidInFull": false,
    "statementSubmissionDate": "",
    "statementSubmissionDueDate": "11/06/2022",
    "statementViewedDate": "",
    "isPaymentMade": false,
    "participantListSignedUrl": '/',
    "paymentsReceived": [
        {
            "id": '3234vdrr2353ef34234',
            "referenceNumber": "DE71510CA48E",
            "amount": 4200000.00,
            "status": "PENDING",
            "invoiceId": 8484882828,
            "paymentDate": "2/15/2022"
        },
        {
            "id": 'jvssdjf98u9f5358wej9',
            "referenceNumber": "DE71510CA47E",
            "amount": 2300000.00,
            "status": "RECEIVED",
            "invoiceId": '463453453456',
            "paymentDate": "01/02/2022"
        },
    ]
  },
  {
    "id": "98484r8fcase89u934ru980",
    "statementNumber": "INV-98765-202110",
    "statementDate": "12/25/2022",
    "premiumAmount": 3900000.00,
    "previousBalance": 0.00,
    "adjustmentAmount": 0.00,
    "paymentDueDate": "12/07/2022",
    "paymentRecievedDate": "",
    "statementCycle": "October 2022",
    "premiumCalculationDate": "12/15/2022",
    "nextstatementAvailableDate": "12/29/2022",
    "statementAmount": 0.00,
    "paidAmount": 3900000.00,
    "balanceAmount": 0.00,
    "isStatementViewed": true,
    "isStatementSubmitted": true,
    "isStatementPaidInFull": true,
    "statementSubmissionDate": "4/14/2022",
    "statementSubmissionDueDate": "12/06/2022",
    "statementViewedDate": "",
    "isPaymentMade": true,
    "participantListSignedUrl": '/',
    "paymentsReceived": [
        {
            "id": '3234vd23rr2353ef34234',
            "referenceNumber": "DE71510CA48E",
            "amount": 4000000.00,
            "status": "PENDING",
            "invoiceId": 8484882828,
            "paymentDate": "01/04/2022"
        },
        {
            "id": 'jvssdjf98u9f5358wej9',
            "referenceNumber": "DE71501CA47E",
            "amount": 500000.00,
            "status": "RECEIVED",
            "invoiceId": '463453453456',
            "paymentDate": "01/02/2022"
        },
    ]
  }
]

const invoicesTableData = [
    {
        "invoiceNumber": "INV-98765-202110",
        "invoiceCycle": "October 2021",
        "invoiceDate": "9/28/2021",
        "dueDate": "10/7/2021",
        "previousBalance": "$400,000.00",
        "newCoverageAmount": "$3,800,000.00",
        "newAdjustments": "$200,000.00",
        "invoiceAmount":"$4,400,000.00",
        "action": "View Details"
      },
      {
        "invoiceNumber": "INV-98765-202110",
        "invoiceCycle": "October 2021",
        "invoiceDate": "9/28/2021",
        "dueDate": "10/7/2021",
        "previousBalance": "$400,000.00",
        "newCoverageAmount": "$3,800,000.00",
        "newAdjustments": "$200,000.00",
        "invoiceAmount":"$4,400,000.00",
        "action": "View Details"
      },
      {
        "invoiceNumber": "INV-98765-202110",
        "invoiceCycle": "October 2021",
        "invoiceDate": "9/28/2021",
        "dueDate": "10/7/2021",
        "previousBalance": "$400,000.00",
        "newCoverageAmount": "$3,800,000.00",
        "newAdjustments": "$200,000.00",
        "invoiceAmount":"$4,400,000.00",
        "action": "View Details"
      },
      {
        "invoiceNumber": "INV-98765-202110",
        "invoiceCycle": "October 2021",
        "invoiceDate": "9/28/2021",
        "dueDate": "10/7/2021",
        "previousBalance": "$400,000.00",
        "newCoverageAmount": "$3,800,000.00",
        "newAdjustments": "$200,000.00",
        "invoiceAmount":"$4,400,000.00",
        "action": "View Details"
      },
      {
        "invoiceNumber": "INV-98765-202110",
        "invoiceCycle": "October 2021",
        "invoiceDate": "9/28/2021",
        "dueDate": "10/7/2021",
        "previousBalance": "$400,000.00",
        "newCoverageAmount": "$3,800,000.00",
        "newAdjustments": "$200,000.00",
        "invoiceAmount":"$4,400,000.00",
        "action": "View Details"
      },
      {
        "invoiceNumber": "INV-98765-202110",
        "invoiceCycle": "October 2021",
        "invoiceDate": "9/28/2021",
        "dueDate": "10/7/2021",
        "previousBalance": "$400,000.00",
        "newCoverageAmount": "$3,800,000.00",
        "newAdjustments": "$200,000.00",
        "invoiceAmount":"$4,400,000.00",
        "action": "View Details"
      },
      {
        "invoiceNumber": "INV-98765-202110",
        "invoiceCycle": "October 2021",
        "invoiceDate": "9/28/2021",
        "dueDate": "10/7/2021",
        "previousBalance": "$400,000.00",
        "newCoverageAmount": "$3,800,000.00",
        "newAdjustments": "$200,000.00",
        "invoiceAmount":"$4,400,000.00",
        "action": "View Details"
      },
      {
        "invoiceNumber": "INV-98765-202110",
        "invoiceCycle": "October 2021",
        "invoiceDate": "9/28/2021",
        "dueDate": "10/7/2021",
        "previousBalance": "$400,000.00",
        "newCoverageAmount": "$3,800,000.00",
        "newAdjustments": "$200,000.00",
        "invoiceAmount":"$4,400,000.00",
        "action": "View Details"
      },
      {
        "invoiceNumber": "INV-98765-202110",
        "invoiceCycle": "October 2021",
        "invoiceDate": "9/28/2021",
        "dueDate": "10/7/2021",
        "previousBalance": "$400,000.00",
        "newCoverageAmount": "$3,800,000.00",
        "newAdjustments": "$200,000.00",
        "invoiceAmount":"$4,400,000.00",
        "action": "View Details"
      }
]

router.get('/', function (req, res, next) {
  res.json(invoicesTableData);
});

router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  const invoice = invoicesData.find((inv) => inv.id === id);
  res.json(invoice);
});

router.put('/:id/edit', function(req, res, next) {
  const id = req.params.id;
  const isViewed = req.body.isViewed;
  const invoice = invoicesData.find((inv) => inv.id === id);
  invoice.isStatementViewed = isViewed;
  invoice.statementViewedDate = new Date().toLocaleDateString();
  res.json(invoice);
})

module.exports = router;
