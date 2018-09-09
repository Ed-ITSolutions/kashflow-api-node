import {KFBoolean} from "./support"

export interface InvoiceLine{
  /** The system-wide, unique ID number for the nominal code (immutable) */
  LineID: number
  /** The number representing how many of the item has been issued */
  Quantity: number
  /** A string of free text for the line item */
  Description: string
  /** The net value of a single item (ie the value of Quantity 1) */
  Rate: number
  /** The ID of the nominal code assigned to the line item */
  ChargeType: number
  /** If a Project is associated with the line item then the Project ID, else 0 */
  ProjID: number
  /** The gross VAT amount for the line item */
  VatAmount: number
  /** The VAT rate for the line item. When inserting, to specify “N/A” (VAT exempt) declare a rate of -1 */
  VatRate: number
  /** The index of the line item for the document, starting from 1 */
  Sort: number
  /** If a Product of the ChargeType is declared then the Product ID, else 0 */
  ProductID: number
  /** Valid for insert only. If the document is in a foreign currency and you are passing the Rate and VatAmount values in that currency then 1, else 0 */
  ValuesInCurrency: KFBoolean
}