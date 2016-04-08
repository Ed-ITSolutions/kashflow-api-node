callerId = require 'caller-id'
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
      @[method] = (args, callback) ->
        @runMethod(args, callback)

  runMethod: (args, callback) ->
    throw 'You must supply a username and password' if @username == null or @password == null

    args.UserName = @username
    args.Password = @password

    caller = callerId.getData()
    name = caller.methodName

    @client.KashFlowAPI.KashFlowAPISoap12[name](args, @cbWrapper(callback))

  cbWrapper: (callback) ->
    (error, result) ->
      throw result.StatusDetails if result.StatusDetails == 'Incorrect username or password'

      callback(error, result)


module.exports = KashflowApi
