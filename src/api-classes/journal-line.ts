export interface JournalLine{
  /** The system-wide, unique ID number for the nominal code used for the journal line, From GetNominals */
  NominalID: number
  /** 
   * The credit/debit value for the journal line.
   *
   * NB:A negative amount will be treated as Credit and a positive amount will be treated as Debit
   */
  Amount: number
  /** The date for the journal entry */
  JournalDate: Date
  /** The comment added to the journal line */
  Comment: string
  /** The project associated with the journal line */
  ProjID: number
}