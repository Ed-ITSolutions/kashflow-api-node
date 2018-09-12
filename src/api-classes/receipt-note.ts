export interface ReceiptNote{
  /** The system-wide, unique ID number for the receipt */
  ReceiptId: number
  /** The system-wide, unique ID number for the ReceiptNote */
  NoteId: number
  /** The date of the ReceiptNote */
  NoteDate: Date
  /** The actual note on the receipt */
  Notes: string
}