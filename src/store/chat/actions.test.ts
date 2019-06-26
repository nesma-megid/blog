import * as actions from './actions'
import * as types from './types'

describe('actions', () => {
  it('should create an action to send a new message', () => {
    const newMessage: types.Message = {
        user: "John",
        message: "Hello",
        timestamp: 10
    };
    const expectedAction = {
      type: types.SEND_MESSAGE,
      payload: newMessage
    }
    expect(actions.sendMessage(newMessage)).toEqual(expectedAction);
  })
})