export interface AccountOverview{
  /** Total outstanding amount (Total – Amount Paid) for all Invoices */
  TotalDue: number
  /** Total outstanding amount (Total – Amount Paid) for all Purchases (receipts) */
  TotalOwed: number
  /** Total outstanding amount (Total – Amount Paid) for all Overdue Purchases (receipts) */
  ReceiptsOverdue: number
  /** Total outstanding amount (Total – Amount Paid) for all Overdue Invoices */
  SalesOverdue: number
  /** Total for all Part Payments assigned to all Purchases (receipts) */
  ReceiptPartPayments: number
  /** Total for all Part Payments assigned to Overdue Purchases (receipts) */
  ReceiptPartPaymentsOverdue: number
  /** Total for all Part Payments assigned to all Invoices */
  InvoicePartPayments: number
  /** Total for all Part Payments assigned to Overdue Invoices */
  InvoicePartPaymentsOverdue: number
}