export interface Payment{
  /** System-wide unique number for this payment */
  PayID: number
  /** Invoice number */
  PayInvoice: number
  /** Date of payment */
  PayDate: Date
  /** Comments about this payment */
  PayNote: string
  /** Method of payment from GetInvPayMethods for invoices or GetRecPayMethods for Receipts  */
  PayMethod: string
  /** The Bank Account to which the payment is assgined (from GetBankAccounts) */
  PayAccount: number
  /** The amount paid */
  PayAmount: number
}