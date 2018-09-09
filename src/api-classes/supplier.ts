import {KFAddress, KFBoolean} from './support'

export interface Supplier extends KFAddress{
  /** The system-wide, unique ID number for this supplier */
  SupplierID: number
  Code: string
  Name: string
  Contact: string
  Telephone: string
  Mobile: string
  Fax: string
  Email: string
  Website: string
  EC: KFBoolean
  /** The suppliers VAT number */
  VATNumber: string
  Notes: string
  /** The date this supplier record was created */
  Created: Date
  /** The date the supplier record was last updated. */
  Updated: Date
  /** The default currency id. See `GetCurrencies`. */
  CurrencyID: string
  /** The payment terms for the supplier */
  PaymentTerms: number
  ContactTitle: string
  ContactFirstName: string
  ContactLastName: string
}