path = require 'path'
expect = require('chai').expect

KashflowApi = require path.join(__dirname, '..', 'src', 'kashflow-api')

describe 'KashflowApi', ->
  this.timeout(10000) # This API is SLOW!

  it 'should tell you your username and password are wrong', (done) ->
    KashflowApi.configure null, null, ->
      expect(->
        KashflowApi.GetCustomers {}, (err, result) ->
          done()
      ).to.throw 'You must supply a username and password'
      done()

  it 'should be configurable', (done) ->
    KashflowApi.configure 'user', 'password', ->
      done()

  it 'should have defined the api methods', ->
    expect(typeof KashflowApi.GetCustomers).to.equal 'function'
