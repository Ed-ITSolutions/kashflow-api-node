import {KashflowAPI} from './kashflow-api'

test('It should accept a username and password', () => {
  let api = new KashflowAPI('a', 'b')

  expect(api.username).toBe('a')
})