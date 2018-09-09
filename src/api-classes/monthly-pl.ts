export interface MonthlyPL{
  /** The start date for this period */
  PeriodStart: Date
  /** The end date for this period */
  PeriodEnd: Date
  /** The Turnover figure for this period */
  Turnover: number
  /** The Gross profit for this period */
  GrossProfit: number
  /** The Net Profit for this period */
  NetProfit: number
}