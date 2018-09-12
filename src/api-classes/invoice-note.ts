export interface InvoiceNote{
  /** The system-wide, unique ID number for the invoice */
  InvoiceID: number
  /** The system-wide, unique ID number for the invoice note (immutable) */
  NoteID: number
  /** The date the note was added in the ISO 8601 format of yyyy-mm-ddT00:00:00 */
  NoteDate: Date
  /** A string of free-text that makes up the note body */
  Notes: string
}