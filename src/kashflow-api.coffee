soap = require 'soap'

KashflowApi =
  client: null
  url: 'https://securedwebapp.com/api/service.asmx?WSDL'
  username: null
  password: null

  configure: (@username, @password, callback) ->
    @getActionList(callback)

  getActionList: (callback) ->
    soap.createClient @url, (err, client)->
      KashflowApi.client = client
      KashflowApi.applyMethods(Object.keys(client.KashFlowAPI.KashFlowAPISoap12))
      callback()

  applyMethods: (methods) ->
    for method in methods
      this[method] = (args, callback) ->
        @runMethod(method, args, callback)

  runMethod: (name, args, callback) ->
    throw 'You must supply a username and password' if @username == null or @password == null

    args.UserName = @username
    args.Password = @password

    @client.KashFlowAPI.KashFlowAPISoap12[name](args, @cbWrapper(callback))

  cbWrapper: (callback) ->
    (error, result) ->
      console.dir result
      throw result.StatusDetails if result.StatusDetails == 'Incorrect username or password'

      callback(error, result)


module.exports = KashflowApi
