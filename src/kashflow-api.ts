import {createClient, Client, WSDL} from 'soap'
import {Customer} from './api-classes/customer'

interface KFWSDL extends WSDL{
  KashFlowAPISoap12: {
    [method: string]: <T>(data: any, callback: (err: any, result: any) => any) => T
  }
}

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

  rawApi(){
    return this.client.KashflowAPI as KFWSDL
  }

  async call<K extends KFAPIMethod>(method: K, inData: MethodDataTypes[K]): Promise<MethodReturnTypes[K]>{
    let data = inData as MethodDataTypes[K] & {username: string, password: string}

    data.username = this.username
    data.password = this.password

    const func = this.rawApi().KashFlowAPISoap12[method]

    return func(data, async (err, result) => {

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