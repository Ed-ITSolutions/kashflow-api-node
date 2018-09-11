import {createClient, Client} from 'soap'

import {APIMethod} from './kashflow/api-method'
import {MethodDataTypes} from './kashflow/method-data-types'
import {MethodReturnTypes} from './kashflow/method-return-types'

interface MethodReturn<K>{
  response: K
  status: string
  detail: string
}

export class KashflowAPI{
  url = 'https://securedwebapp.com/api/service.asmx?WSDL'
  username: string
  password: string
  client: Client

  constructor(username: string, password: string){
    this.username = username
    this.password = password
  }

  /**
   * Replaces the soap client with a new one. Useful for testing.
   * 
   * @param newClient The new client
   */
  replaceClient(newClient: any){
    this.client = newClient
  }

  async connectClient(){
    const api = this

    return new Promise((resolve, reject) => {
      createClient(this.url, (err, client) => {
        api.client = client
        resolve()
      })
    })
  }

  /**
   * Remove empty strings from the incoming data so the kashflow api doesn't reject the request
   * 
   * @param data Incoming data.
   */
  filterData<T>(data: T): T & {UserName: string, Password: string}{
    let inData = data as any

    Object.keys(data).forEach((key) => {
      if(typeof inData[key] === 'object'){
        Object.keys(inData[key]).forEach((subKey) => {
          if(
            inData[key][subKey] === ''
            ||
            subKey === 'Updated'
            ||
            subKey === 'Created'
          ){
            delete inData[key][subKey]
          }
        })
      }
    })

    inData.UserName = this.username
    inData.Password = this.password

    return inData as any
  }

  /**
   * Makes a call against the Kashflow API and returns a promise.
   * 
   * @param method The `KFAPIMethod` to call
   * @param inData The data to pass to the API call.
   * @returns An Object with the response in `response` and the status in `status` and `detail`
   */
  async call<K extends APIMethod>(method: K, inData: MethodDataTypes[K]): Promise<MethodReturn<MethodReturnTypes[K]>>{
    if(!this.client){
      await this.connectClient()
    }

    const func = this.client[method] as (data: MethodDataTypes[K], cb: (err: any, result: any) => void) => Promise<MethodReturnTypes[K]>

    return new Promise<MethodReturn<MethodReturnTypes[K]>>((resolve, reject) => {
      func(this.filterData(inData), (err, result) => {
        if(err){
          reject(err)
        }

        if(result.Status === 'NO'){
          reject(result.StatusDetail)
        }else{
          resolve({
            response: result[method + 'Result'],
            status: result.Status,
            detail: result.StatusDetail
          })
        }
      })
    })
  }
}

export default KashflowAPI

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

export {APIMethod} from './kashflow/api-method'
export {MethodDataTypes} from './kashflow/method-data-types'
export {MethodReturnTypes} from './kashflow/method-return-types'
