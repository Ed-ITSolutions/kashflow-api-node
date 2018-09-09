import {KFBoolean} from "./support"

export interface SubProduct{
  /** The system-wide, unique ID number for this SubProduct */
  id: number
  /** The ID of the parent NominalCode to which this SubProduct belongs */
  ParentID: number
  /** The name for this SubProduct */
  Name: string
  /** The code for this SubProduct. Unlike a Nominal Code, this does not need to be numeric. */
  Code: string
  /** A description for this SubProduct */
  Description: string
  /** The default price of the SubProduct */
  Price: number
  /** The default VAT Rate of the SubProduct */
  VatRate: number
  /** The wholesale price of the sub-product */
  WholesalePrice: number
  /** A flag indicating whether a sub-products’ stock is managed. Set to 1 if you want the SubProduct managed */
  Managed: KFBoolean
  /** The current stock quantity of the sub-product */
  QtyInStock: number
  /** The current configured stock warning quantity of the sub-product */
  StockWarnQty: number
  /** A flag indicating whether or not Line Items raised with this SubProduct auto-populate with the Description, Price/WholesalePrice and VatRate values */
  AutoFill: KFBoolean
}