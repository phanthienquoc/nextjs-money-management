
export const columns = [
   { name: 'ID', uid: 'transactionId' },
   { name: 'NAME', uid: 'initiatedBy' },
   { name: 'TYPE', uid: 'transactionType' },
   { name: 'DATE', uid: 'transactionDate' },
   { name: 'AMOUNT', uid: 'amount' },
   { name: 'CURRENCY', uid: 'currency' },
   { name: 'STATUS', uid: 'status' },
   { name: 'ACTIONS', uid: 'actions' },
];

export const transactions = [
   {
      "transactionId": "txn001",
      "accountId": "acc001",
      "amount": 100.00,
      "currency": "USD",
      "transactionType": "debit",
      "transactionDate": "2024-07-15T10:00:00Z",
      "description": "Grocery shopping at Walmart",
      "category": "groceries",
      "status": "completed",
      "initiatedBy": "mother"
   },
   {
      "transactionId": "txn002",
      "accountId": "acc002",
      "amount": 2000.00,
      "currency": "USD",
      "transactionType": "credit",
      "transactionDate": "2024-07-01T09:00:00Z",
      "description": "Monthly salary",
      "category": "salary",
      "status": "completed",
      "initiatedBy": "father"
   },
   {
      "transactionId": "txn003",
      "accountId": "acc003",
      "amount": 50.00,
      "currency": "USD",
      "transactionType": "debit",
      "transactionDate": "2024-07-20T14:00:00Z",
      "description": "Movie tickets",
      "category": "entertainment",
      "status": "completed",
      "initiatedBy": "olderBrother"
   },
   {
      "transactionId": "txn004",
      "accountId": "acc004",
      "amount": 25.00,
      "currency": "USD",
      "transactionType": "debit",
      "transactionDate": "2024-07-22T16:00:00Z",
      "description": "Ice cream",
      "category": "entertainment",
      "status": "completed",
      "initiatedBy": "youngerSister"
   },
   {
      "transactionId": "txn005",
      "accountId": "acc001",
      "amount": 150.00,
      "currency": "USD",
      "transactionType": "debit",
      "transactionDate": "2024-07-25T12:00:00Z",
      "description": "Electricity bill",
      "category": "utilities",
      "status": "completed",
      "initiatedBy": "father"
   },
   {
      "transactionId": "txn006",
      "accountId": "acc002",
      "amount": 500.00,
      "currency": "USD",
      "transactionType": "credit",
      "transactionDate": "2024-07-30T08:00:00Z",
      "description": "Stock investment",
      "category": "investment",
      "status": "completed",
      "initiatedBy": "mother"
   },
   {
      "transactionId": "txn007",
      "accountId": "acc003",
      "amount": 75.00,
      "currency": "USD",
      "transactionType": "debit",
      "transactionDate": "2024-07-28T11:00:00Z",
      "description": "Internet bill",
      "category": "utilities",
      "status": "completed",
      "initiatedBy": "olderBrother"
   },
   {
      "transactionId": "txn008",
      "accountId": "acc004",
      "amount": 30.00,
      "currency": "USD",
      "transactionType": "debit",
      "transactionDate": "2024-07-29T13:00:00Z",
      "description": "Books",
      "category": "others",
      "status": "completed",
      "initiatedBy": "youngerSister"
   }
]