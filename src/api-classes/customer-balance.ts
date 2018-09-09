export interface CustomerBalance{
  /** The system-wide, unique ID number for the customer (immutable) */
  CustomerId: number
  /** An alphanumeric ID for the customer, unique for the KashFlow account customers list */
  CustomerCode: string
  /** The sum of all payments made by the customer– excludes anything dated for the future */
  Value: number
  /** The unpaid amount of all invoices issued to the customer– excludes anything dated for the future */
  Balance: number
}