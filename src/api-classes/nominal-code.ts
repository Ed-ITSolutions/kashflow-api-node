export interface NominalCode{
  /** The system-wide, unique ID number for the nominal code (immutable) */
  id: number
  /** The Nominal Code code */
  Code: number
  /** The Nominal Code name */
  Name: string
  /** The sum of all debits to the Nominal Code (for the defined period) */
  debit: number
  /** The sum of all credits to the Nominal Code (for the defined period) */
  credit: number
  /** The value of the credit minus the debit (for the defined period) */
  balance: number
}