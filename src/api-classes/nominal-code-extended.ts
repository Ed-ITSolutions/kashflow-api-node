import {NominalCode} from './nominal-code'
import {KFBoolean} from './support'

export interface NominalCodeExtended extends NominalCode{
  /** Provides an ID number to tell you where on the P&L on Balance sheet this code belongs */
  TypeID: number
  /** A human-friendly version of TypeID */
  TypeName: string
  /** This property tells you where in the application the code is listed (ie as a “Sales Type”) */
  ClassificationID: number
  /** A human-friendly version of ClassificationID */
  ClassificationName: string
  /** 1 if the nominal is configured to autofill and 0 if not */
  AutoFill: KFBoolean
  /** The configured price for the nominal */
  Price: number
  /** The configure VAT rate for the nominal */
  VATRate: number
  /** The configured description for the nominal. */
  Description: string
}