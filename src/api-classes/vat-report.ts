export interface VATReport{
  /** The start date for this VAT report */
  StartDate: Date
  /** The end date for this VAT report */
  EndDate: Date
  SubmittedToAccounts: boolean
  SubmittedToHMRC: boolean
  SubmittedToHMRCDate: Date
  Box1: number
  Box2: number
  Box3: number
  Box4: number
  Box5: number
  Box6: number
  Box7: number
  Box8: number
  Box9: number
}