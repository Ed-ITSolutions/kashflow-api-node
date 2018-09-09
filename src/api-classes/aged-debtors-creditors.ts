export interface AgedDebtorsCreditors{
  /** The Customer / Supplier system-wide unique ID */
  id: number
  /** The Customer / Supplier name */
  Name: string
  /** The Customer / Supplier code */
  Code: string
  /** The sum of (Older + Period3_val + Period2_val + Period1_val + Current) for the Customer / Supplier  */
  Balance: number
  /** The value of Debits – Credits within the month specified in the End Date of the report, for the Customer / Supplier */
  Current: number
  /** The name of the month before that of the specified End Date (‘Current’ month) */
  Period1_name: string
  /** The value of Debits – Credits for the Customer / Supplier  within the month previous to the ‘Current’ */
  Period1_val: string
  /** The name of the month previous to ‘Period1’ */
  Period2_name: string
  /** The value of Debits – Credits for the Customer / Supplier  within the month previous to ‘Period1’ */
  Period2_val: string
  /** The name of the month previous to ‘Period2’ */
  Period3_name: string
  /** The value of Debits – Credits for the Customer / Supplier  within the month previous to ‘Period2’ */
  Period3_val: string
  /** The value of Debits – Credits older than ‘Period3’ for the Customer / Supplier */
  Older: number
}