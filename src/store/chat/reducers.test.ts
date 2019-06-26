import { chatReducer } from './reducers';
import * as types from './types';

describe('Chat Reducer', () => {
    it('should handle SEND_MESSAGE', () => {
        const newMessage: types.Message = {
            user: "John",
            message: "Hello",
            timestamp: 10
        };
        const sendMessageAction: types.ChatActionTypes = {
          type: types.SEND_MESSAGE,
          payload: newMessage
        };
        expect(chatReducer(undefined, sendMessageAction)).toEqual({"messages": [newMessage]});
    });

    it('should handle DELETE_MESSAGE', () => {
        const newMessage: types.Message = {
            user: "John",
            message: "Hello",
            timestamp: 10
        };

        const sendMessageAction: types.ChatActionTypes = {
          type: types.SEND_MESSAGE,
          payload: newMessage
        };

        const deleteMessageAction: types.ChatActionTypes = {
            type: types.DELETE_MESSAGE,
            meta: {
                timestamp: 10
            }
        };

        chatReducer(undefined, sendMessageAction);

        expect(chatReducer(undefined, deleteMessageAction)).toEqual({"messages": []});
    });

});