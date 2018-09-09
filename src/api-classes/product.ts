import {KFBoolean} from "./support"

export interface Product{
  /** System-wide unique number for this product */
  ProductID: number
  /** The name of the product */
  ProductName: string
  /** The code for this product */
  ProductCode: number
  /** Description of the product */
  ProductDescription: string
  /** Indicate whether or not the stock levels for this product are to be tracked or not. */
  ManageStockLevels: KFBoolean
  /** The quantity of this item that is in stock */
  QtyInStock: number
  /** The price of the product */
  ProductPrice: number
}