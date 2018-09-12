import {NominalCode} from './nominal-code'

export interface BalanceSheet{
  /** The end date to run the Balance Sheet up to */
  Date: Date
  /** An array of type `NominalCode` containing all Nominal Codes with values contributing to the FixedAssetsTotal for the defined period */
  FixedAssets: NominalCode[]
  /** Sum of the balances for the Nominal Codes in FixedAssets */
  FixedAssetsTotal: number
  /** An array of type `NominalCode` containing all Nominal Codes with values contributing to the CurrentAssetsTotal for the defined period */
  CurrentAssets: NominalCode[]
  /** Sum of the balances for the Nominal Codes in CurrentAssets */
  CurrentAssetsTotal: number
  /** An array of type `NominalCode` containing all Nominal Codes with values contributing to the CurrentLiabilitiesTotal for the defined period */
  CurrentLiabilities: NominalCode[]
  /** Sum of the balances for the Nominal Codes in CurrentLiabilities */
  CurrentLiabiltiesTotal: number
  /** An array of type NominalCode containing all Nominal Codes with values contributing to the CapitalReservesTotal for the defined period  */
  CapitalReserves: NominalCode[]
  /** Sum of the balances for the Nominal Codes in CapitalReserves */
  CapitalReservesTotal: number
}