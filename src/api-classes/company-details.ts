import {KFAddress, KFYesNo} from './support'

export interface CompanyDetails extends KFAddress{
  /** The company name */
  CompanyName: string
  /** The contact email address */
  PrimaryEmail: string
  /** The contact name */
  PrimaryContact: string
  /** The contact telephone number */
  Telephone: string
  /** The contact mobile number */
  Mobile: string
  /** If the company is specified as VAT registered then “Yes”, else “No” */
  VatRegistered: KFYesNo
  /** The company VAT registration number */
  VatRegistrationNumber: string
  /** The KashFlow account default payment terms */
  PaymentTerms: number
  /** The home currency symbol */
  CurrencySymbol: string
  /** If the currency symbol is specified to appear before monetary values then “Left”, else if specified to appear after monetary values then “Right” */
  CurrencyPosition: 'Left' | 'Right'
  /** If the account is specified to operate with the US standard date format of mm/dd/yyyy then “Yes”, else if with the date format of dd/mm/yyyy then “No” */
  UsDate: KFYesNo
  /** The ID of the currency specified as the home currency */
  CurrencyId: number
  /** The home currency name */
  CurrencyName: string
  /** The ID of for the primary level industry sector value */
  BusinessType1: number
  /** The ID of for the secondary level industry sector value */
  BusinessType2: number
  /** The ID of for the tertiary level industry sector value */
  BusinessType3: number
  /** If the PaymentTerms are the days after the issue month end then “month end”, else if days after the issue date then “invoice date” */
  PaymentTermsType: 'month end' | 'invoice date'
  /** The name of the primary level industry sector value */
  BusinessName1: string
  /** The name of the secondary level industry sector value */
  BusinessName2: string
  /** The name of the tertiary level industry sector value */
  BusinessName3: string
  /** The ID for the business type */
  BusinessType: number
}