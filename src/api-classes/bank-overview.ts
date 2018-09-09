export interface BankOverview{
  /** The system-wide, unique ID number for this Bank Account (immutable) */
  AccountID: number
  /** The Bank Account name */
  AccountName: string
  /** The sum of the “Start Balance” of the Bank Account and all of its Transactions dated on or before the present day */
  Balance: number
}