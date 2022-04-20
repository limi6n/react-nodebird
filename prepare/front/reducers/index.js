import { HYDRATE } from "next-redux-wrapper";

export const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
};

// action creator : 동적으로 action 함수를 만듦. 
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

// (이전상태, 액션) 을 통해 다음 상태를 만들어내는 함수 
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        case 'LOG_IN':
            // 객체 불변성을 유지하기 위해 덮어쓰는 것이 아니라 새로운 객체를 만듦.
            return {
                // 메모리 최적화를 위해 바뀌는 부분만 바꾸고 나머지는 기존값 유지
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                },
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            }
        default:
            return state; // 리듀서 초기화할 때 필요
    }
};

export default rootReducer;