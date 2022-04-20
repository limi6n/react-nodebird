import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from './user';
import post from './post';

// (이전상태, 액션) 을 통해 다음 상태를 만들어내는 함수 
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return {...state, ...action.payload};
            default:
                return state; // 리듀서 초기화할 때 필요
        }
    },
    user,
    post,
})
    

export default rootReducer;