import {KFBoolean, KFAddress} from './support'

export interface Customer extends KFAddress{
  /** The system-wide, unique ID number for the customer (immutable) */
  CustomerID: number
  /** An alphanumeric ID for the customer, unique for the KashFlow account customers list */
  Code: string
  /** The name of the customer */
  Name: string
  /** The full contact name for the customer */
  Contact: string
  /** The customer telephone number */
  Telephone: string
  /** The customer mobile number */
  Mobile: string
  /** The customer fax number */
  Fax: string
  /** The customer email address(es) */
  Email: string
  /** The customer billing address country name */
  CountryName: string
  /** The customer billing address country code in the ISO 3166-1 alpha-2 standard (except for Greece which is recorded as ‘EL’) */
  CountryCode: string
  /** The customer website URI */
  Website: string
  /** If the customer is VAT Registered in another EC Member State then 1, else 0 */
  EC: KFBoolean
  /** If the customer is VAT Registered outside of the EC then 1, else 0 */
  OutsideEC: KFBoolean
  /** A string of additional free-text */
  Notes: string
  /** The ID for the source assigned to the customer */
  Source: number
  /** The discount percentage for this customer */
  Discount: number
  /** If the customer is specified to receive a discount then true, else false */
  ShowDiscount: boolean
  /** The number of days used to define the Due Date on Invoices from the Issue Date */
  PaymentTerms: number
  ExtraText1: string
  ExtraText2: string
  ExtraText3: string
  ExtraText4: string
  ExtraText5: string
  ExtraText6: string
  ExtraText7: string
  ExtraText8: string
  ExtraText9: string
  ExtraText10: string
  ExtraText11: string
  ExtraText12: string
  ExtraText13: string
  ExtraText14: string
  ExtraText15: string
  ExtraText16: string
  ExtraText17: string
  ExtraText18: string
  ExtraText19: string
  ExtraText20: string
  CheckBox1: string
  CheckBox2: string
  CheckBox3: string
  CheckBox4: string
  CheckBox5: string
  CheckBox6: string
  CheckBox7: string
  CheckBox8: string
  CheckBox9: string
  CheckBox10: string
  CheckBox11: string
  CheckBox12: string
  CheckBox13: string
  CheckBox14: string
  CheckBox15: string
  CheckBox16: string
  CheckBox17: string
  CheckBox18: string
  CheckBox19: string
  CheckBox20: string
  /** The date this customer record was inserted (immutable) */
  Created: Date
  /** The date this customer record was last updated (read-only) */
  Updated: Date
  /** The ID for the customers default currency */
  CurrencyID: number
  /** The customer contacts title */
  ContactTitle: string
  /** The customer contacts first name */
  ContactFirstName: string
  /** The customer contacts last name */
  ContactLastName: string
  /** If the customer is specified as having a delivery address separate to their billing address then 1, else 0 */
  CustHasDeliveryAddress: KFBoolean
  DeliveryAddress1: string
  DeliveryAddress2: string
  DeliveryAddress3: string
  DeliveryAddress4: string
  DeliveryCountryName: string
  DeliveryCountryCode: string
  DeliveryPostcode: string
  /** The customer VAT number */
  VATNumber: string
}