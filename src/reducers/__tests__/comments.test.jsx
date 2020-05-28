import commentsReducer from 'reducers/comment';
import { SAVE_COMMENT} from 'actions/types';
import { combineReducers } from 'redux';



it('handles actions of type SAVE_COMMENT',()=>{
    const action = {
        type : SAVE_COMMENT,
        payload: 'comment'
    };

    const newState = commentsReducer([],action)
    expect(newState).toEqual(['comment'])
})

it('handle action with unknown type', ()=>{
   const newState =  commentsReducer([],{});
    expect(newState).toEqual([]);
})
