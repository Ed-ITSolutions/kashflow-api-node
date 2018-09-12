import {KFBoolean} from "./support"

export interface BankTransaction{
  /** The system-wide, unique ID number for the Transaction (immutable) */
  ID: number
  /** The parent Bank Account Nominal Code code */
  accid: number
  /** The date of this Transaction */
  TransactionDate: Date
  /** If a money in Transaction, the value of the Transaction  */
  moneyin: number
  /** If a money out Transaction, the value of the Transaction */
  Vatable: KFBoolean
  /** The VAT rate for the Transaction */
  VatRate: number
  /** The VAT amount for the Transaction */
  VatAmount: number
  /** The Nominal Code code the Transaction is raised against */
  TransactionType: number
  /** The comment on the Transaction */
  Comment: string
  /** If a Project is associated with the Transaction then the ProjectID, else 0 */
  ProjectID: number
  /** If the Transaction TransactionType is the Nominal Code code for the Debtors Control Account then the CustomerID for the associated Customer, else 0 */
  CustomerID: number
  /** If the Transaction TransactionType is the Nominal Code code for the Creditors Control Account then the SupplierID for the associated Supplier, else 0 */
  SupplierID: number
}