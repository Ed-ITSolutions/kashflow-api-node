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

test('It should make an API Request', async (done) => {
  let api = new KashflowAPI('a', 'b')

  api.replaceClient({
    GetCustomer: stubbedMethod('GetCustomer', {
      Name: 'Test School'
    })
  })

  let {status, response: customer} = await api.call('GetCustomer', {
    CustomerCode: 'TES01'
  })

  expect(status).toBe('OK')
  expect(customer.Name).toBe('Test School')
  done()
})

test('It should handle errors', async (done) => {
  let api = new KashflowAPI('a', 'b')
  
  api.call('GetCustomer', {
    CustomerCode: 'TES01'
  }).then(() => {
    //If this code is run then the test has failed
    expect(true).toBe(false)
    done()
  }).catch((message: string) => {
    expect(message).toBe('Incorrect username or password')
    done()
  })
})

test('It should filter empty fields', async (done) => {
  let api = new KashflowAPI('a', 'b')

  api.replaceClient({
    UpdateCustomer: (data: any, cb: any) => {
      expect(data.custr.foo).toBe(undefined)
      done()
    }
  })

  return api.call('UpdateCustomer', {
    custr: {
      foo: '',
      bar: 'foo'
    } as any
  })
})