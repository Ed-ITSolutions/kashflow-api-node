import {KFBoolean} from "./support"
import {DeliveryAddress} from "./delivery-address"
import {InvoiceLine} from './invoice-line'

export interface Invoice{
  /** The system-wide, unique ID number for this document (immutable) */
  InvoiceDBID: number
  /** The document number, must be unique for the KashFlow account for this document-type */
  InvoiceNumber: number
  /** The issue date for the document in the ISO 8601 format of yyyy-mm-ddTHH:MM:SS */
  InvoiceDate: Date
  /** The due date for the document in the ISO 8601 format of yyyy-mm-ddTHH:MM:SS . For Quotes this is always 0001-01-01T00:00:00 */
  DueDate: Date
  /** If the document is a Quote and the total is to be hidden then 1, else 0 */
  SuppressTotal: KFBoolean
  /** If a Project is associated with the document then the ProjectID, else 0 */
  ProjectID: number
  /** The currency code in the ISO 4217 standard */
  CurrencyCode: string
  /** The exchange rate for the defined currency */
  ExchangeRate: number
  /** If the document is an Invoice or Receipt and is completely paid then 1, else 0 */
  Paid: number
  /** If an Invoice or Quote then the CustomerID, else the SupplierID */
  CustomerID: number
  /** A string of free-text */
  CustomerReference: string
  /** If a Quote then it’s category (read-only) */
  EstimateCategory: string
  /** The sum of the net value for all documents lines (read-only) */
  NetAmount: number
  /** The sum of the VAT value for all documents lines (read-only) */
  VatAmount: number
  /** If the document is an Invoice or Purchase then the sum of all the payments made to it(read-only) */
  AmountPaid: number
  /** A permanent link to access a PDF of the document (read-only) */
  Permalink: string
  /** If the document is a Quote or Invoice and a Delivery Address is defined to be used then true, else false */
  UseCustomDeliveryAddress: boolean
  /** The Delivery Address */
  DeliveryAddress: DeliveryAddress
  /** An array of type InvoiceLine */
  Lines: InvoiceLine[]
}