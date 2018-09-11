import {KashflowAPI} from './kashflow-api'

const stubbedMethod = (name: string, response: any) => {
  return async (data: any, cb: any) => {
    const returnValue: any = {}

    returnValue[name + 'Result'] = response
    returnValue.Status = 'OK'
    returnValue.StatusDetail = 'Found Customer'

    cb(null, returnValue)
  }
}

test('It should accept a username and password', () => {
  let api = new KashflowAPI('a', 'b')

  expect(api.username).toBe('a')
})

test('It should make an API Request', async () => {
  let api = new KashflowAPI('a', 'b')

  api.replaceClient({
    GetCustomer: stubbedMethod('GetCustomer', {
      Name: 'Test School'
    })
  })

  let customer = await api.call('GetCustomer', {
    CustomerCode: 'TES01'
  })

  expect(customer.status).toBe('OK')
  return expect(customer.response.Name).toBe('Test School')
})

/*test('It should handle errors', async () => {
  let api = new KashflowAPI('a', 'b')

  api.replaceClient({
    GetCustomer: (data: any, cb: any) => {
      cb(null, {
        Status: 'No',
        StatusDetails: 'This test has passed'
      })
    }
  })

  api.call('GetCustomer', {
    CustomerCode: 'TES01'
  }).then(() => {
    //If this code is run then the test has failed
    expect(true).toBe(false)
  }).catch((message: string) => {
    expect(message).toBe('This test has passed')
  })
})*/