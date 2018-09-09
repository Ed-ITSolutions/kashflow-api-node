export interface ReceiptAttachment{
  /** System-wide unique number for the receipt attachment. */
  AttachmentID: number
  /** System-wide unique number for the receipt. */
  ReceiptID: number
  /** The filename specified by the user */
  ActualFilename: string
  /** The unique filename. */
  AmazonFilename: string
  /** The date the file was attached */
  UploadDate: Date
  /** The file type */
  ContentType: string
  /** The Metadata name for the file. */
  Metaname: string
  MetaValue: string
  /** The size of the file in KB */
  FileSize: string
  /** The extension of the file */
  FileExtension: string
  /** The public URL of the file. */
  FileURL: string
}