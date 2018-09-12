import {NominalCode} from './nominal-code'

export interface ProfitAndLoss{
  /** The total turnover for this period */
  TurnoverTotal: number
  /** The total cost of sales for this period */
  CostOfSalesTotal: number
  /** The total expenses for this period */
  ExpensesTotal: number
  /** The net profit for this period */
  NetProfit: number
  /** The gross profit for this period */
  GrossProfit: number
  /** The Nominal Code system-wide unique ID */
  id: number
  /** The code for this Nominal Code */
  Code: string
  /** The name for this Nominal Code */
  Name: string
  /** An array of type `NominalCode` containing each code that makes up the TurnoverTotal figure */
  Turnover: NominalCode[]
  /** An array of type `NominalCode` containing each code that makes up the CostofSalesTotal figure */
  CostOfSales: NominalCode[]
  /** An array of type `NominalCode` containing each code that makes up the ExpensesTotal figure */
  Expenses: NominalCode[]
}