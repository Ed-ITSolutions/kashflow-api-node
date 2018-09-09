import {createClient, Client} from 'soap'

import {AccountOverview} from './api-classes/account-overview'
import {AgedDebtorsCreditors} from './api-classes/aged-debtors-creditors'
import {BalanceSheet} from './api-classes/balance-sheet'
import {Customer} from './api-classes/customer'

export class KashflowAPI{
  url = 'https://securedwebapp.com/api/service.asmx?WSDL'
  username: string
  password: string
  client: Client

  constructor(username: string, password: string){
    this.username = username
    this.password = password

    createClient(this.url, (err, client) => {
      this.client = client
    })
  }

  /**
   * Replaces the soap client with a new one. Useful for testing.
   * 
   * @param newClient The new client
   */
  replaceClient(newClient: any){
    this.client = newClient
  }

  /**
   * Makes a call against the Kashflow API and returns a promise.
   * 
   * @param method The `KFAPIMethod` to call
   * @param inData The data to pass to the API call.
   */
  async call<K extends KFAPIMethod>(method: K, inData: MethodDataTypes[K]): Promise<MethodReturnTypes[K]>{
    let data = inData as MethodDataTypes[K] & {UserName: string, Password: string}

    data.UserName = this.username
    data.Password = this.password

    const func = this.client[method] as (data: MethodDataTypes[K], cb: (err: any, result: any) => void) => Promise<MethodReturnTypes[K]>

    return new Promise<MethodReturnTypes[K]>((resolve, reject) => {
      func(data, (err, result) => {
        if(result.Status === 'NO'){
          reject(result.StatusDetail)
        }else{
          resolve(result[method + 'Result'])
        }
      })
    })
  }
}

export default KashflowAPI

type KFAPIMethod = 
  'GetAccountOverview' |
  'GetAgedCreditors' |
  'GetAgedDebtors' |
  'GetBalanceSheet' |
  'GetCustomer'

interface MethodReturnTypes{
  GetAccountOverview: AccountOverview
  GetAgedCreditors: AgedDebtorsCreditors[]
  GetAgedDebtors: AgedDebtorsCreditors[]
  GetBalanceSheet: BalanceSheet
  GetCustomer: Customer
}

interface MethodDataTypes{
  GetAccountOverview: {}
  GetAgedCreditors: {
    AgedCreditorsDate: Date
  }
  GetAgedDebtors: {
    AgedDebtorsDate: Date
  }
  GetBalanceSheet: {
    Date: Date
  }
  GetCustomer: {
    CustomerCode: string
  }
}

export {AccountOverview} from './api-classes/account-overview'
export {AgedDebtorsCreditors} from './api-classes/aged-debtors-creditors'
export {BalanceSheet} from './api-classes/balance-sheet'
export {BankAccount} from './api-classes/bank-account'
export {BankOverview} from './api-classes/bank-overview'
export {BankTransaction} from './api-classes/bank-transaction'
export {BankTXType} from './api-classes/bank-tx-type'
export {BasicDataSet} from './api-classes/basic-data-set'
export {CompanyDetails} from './api-classes/company-details'
export {Currency} from './api-classes/currencies'
export {Customer} from './api-classes/customer'
export {CustomerBalance} from './api-classes/customer-balance'
export {DeliveryAddress} from './api-classes/delivery-address'
export {Invoice} from './api-classes/invoice'
export {InvoiceLine} from './api-classes/invoice-line'
export {InvoiceNote} from './api-classes/invoice-note'
export {JournalEntry} from './api-classes/journal-entry'
export {JournalLine} from './api-classes/journal-line'
export {MonthlyPL} from './api-classes/monthly-pl'
export {NominalCode} from './api-classes/nominal-code'
export {NominalCodeExtended} from './api-classes/nominal-code-extended'
export {Payment} from './api-classes/payment'
export {PaymentMethod} from './api-classes/payment-method'
export {Product} from './api-classes/product'
export {ProductsFull} from './api-classes/products-full'
export {ProfitAndLoss} from './api-classes/profit-and-loss'
export {Project} from './api-classes/project'
export {ReceiptAttachment} from './api-classes/receipt-attachment'
export {ReceiptNote} from './api-classes/receipt-note'
export {Supplier} from './api-classes/supplier'
export {TransactionInformation} from './api-classes/transaction-information'
export {VATReport} from './api-classes/vat-report'