# Kashflow API (Node)

The Kashflow api bindings for NodeJS written in Typescript.

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
}).then(function(customer){
  // your code here.
})
```

Whilst this library will work fine in Javascript it has so many more features for Typescript.

### Typescript

This library is 90% Typescript typings.

The `call` method has its input data and response typed based on the requested API method. All the interfaces are exported 

```ts
import {KashflowAPI} from 'kashflow-api'

const api = new KashflowAPI('your-username', 'your-password')


```
