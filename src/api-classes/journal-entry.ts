import {JournalLine} from './journal-line'

export interface JournalEntry{
  /** The system-wide, unique ID number for the journal (immutable) */
  DBID: number
  /** The journal number, must be unique for the KashFlow account journal list */
  JournalNumber: number
  /** The date the journal was recorded for in ISO 8601 format of yyyy-mm-ddT00:00:00 */
  JournalDate: Date
  /** A string of free text used to add a comment to the journal head */
  Comment: string
  Lines: JournalLine[]
}