export interface TransactionInformation{
  /** The date of the transaction */
  Date: Date
  /** The unique id number for the nominal code involved in this transaction */
  nomid: number
  /** The value of this transaction */
  Value: number
  /**
   * The transaction type
   * 1 = Sales Invoice
   * 2 = Purchase Invoice
   * 3 = Bank Transaction
   * 4 = Journal Entry
   */
  Type: 1 | 2 | 3 | 4
  /** The id number (Could be for an invoice, purchase, etc, dependent on the ‘type’ above. */
  id: number
  /** For future use */
  id2: number
  /** For future use */
  id3: number
  /** The Invoice or Purchase number, or the name of the bank account */
  Ref1: string
  /** The customer or supplier name, or the comment entered if ‘type’ is 3 or 4. */
  Ref2: string
  /** For future use */
  Ref3: string
  /** The description of the transaction */
  Narrative: string
  /** The project associated with the transaction */
  ProjID: string
}