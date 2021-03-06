# Kashflow API (Node)

[![Coverage Status](https://coveralls.io/repos/github/Ed-ITSolutions/kashflow-api-node/badge.svg?branch=master)](https://coveralls.io/github/Ed-ITSolutions/kashflow-api-node?branch=master)

The Kashflow api bindings for NodeJS written in Typescript.

## Before you Install

Version 1.0.0 is still in testing. The javascript works fine and it makes API cals no problem, but the typings enforced by Typescript may require some tweaking as time goes on. If you have any problems open an issue here.

## Install

```
npm install --save kashflow-api
```

## Usage

Require Kashflow

### Javascript

```js
var KashflowAPI = require('kashflow-api')

var api = new KashflowAPI('your-username', 'your-password')

api.call('GetCustomer', {
  CustomerCode: 'SOMECODE'
}).then(function(result){
  // your code here.
  result.response // The customer
})
```

Whilst this library will work fine in Javascript it has so many more features for Typescript.

### Typescript

This library is 90% Typescript typings.

The `call` method has its input data and response typed based on the requested API method. All the interfaces are exported for you to use in your code.

```ts
import {KashflowAPI, Customer} from 'kashflow-api'

const useAPI = async () => {
  const api = new KashflowAPI('your-username', 'your-password')

  let {response: customer} = await api.call('GetCustomer', {
    CustomerCode: 'SOMECODE' // TS will only allow CustomerCode here because of the call to `GetCustomer
  })

  customer.Name // will produce no errors as the output is typed as Customer
}

// Using exported interfaces you can set the types for functions etc...
const outputCustomer = (customer: Customer) => {
  console.log(customer.Name)
}
```

We reccomend using Typescript with this API. There is some extremely inconsistent naming and inputs, for example `GetInvoice` uses `InvoiceNumber`, `GetInvoiceNotes` uses `InvoiceId`, `GetInvoicePayment` uses `InvoiceNumber` and `GetInvoiceByID` uses `InvoiceID`.

## Contributing

We welcome pull requests and issues on this repository.

To build locally pull a copy of the repository and run `npm install` to get the dependecies.

Testing is done with `npm test` which will test the code and that `tsc` can compile the output.