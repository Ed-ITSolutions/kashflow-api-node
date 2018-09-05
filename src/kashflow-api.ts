import {createClient, Client, WSDL} from 'soap'
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

  async call<K extends KFAPIMethod>(method: K, inData: MethodDataTypes[K]): Promise<MethodReturnTypes[K]>{
    let data = inData as MethodDataTypes[K] & {username: string, password: string}

    data.username = this.username
    data.password = this.password

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

type KFAPIMethod = 
  'GetCustomer'

interface MethodReturnTypes{
  GetCustomer: Customer
}

interface MethodDataTypes{
  GetCustomer: {
    CustomerCode: string
  }
}

export {Customer} from './api-classes/customer'