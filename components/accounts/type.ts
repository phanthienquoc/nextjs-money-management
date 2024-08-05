export type ITransaction = {
    transactionId: string;
    accountId: string;
    amount: number;
    currency: string;
    transactionType: 'debit' | 'credit';
    transactionDate: string; // ISO 8601 date string
    description: string;
    category: string;
    status: 'completed' | 'pending' | 'failed';
    initiatedBy: 'father' | 'mother' | 'olderBrother' | 'youngerSister';
};