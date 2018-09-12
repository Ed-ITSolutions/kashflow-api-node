export interface BankAccount{
  /** The system-wide, unique ID number for this Bank Account (immutable) */
  AccountID: number
  /** The Bank Account name */
  AccountName: string
  /** The Bank Account Nominal Code code */
  AccountCode: number
}