export const initialState = {
    mainPosts: [{
        id: 1, 
        User: {
            id: 1,
            nickname: '리미',
        },
        content: '첫 번째 게시글 #노드버드',
        Images: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            User: {
                nickname: '라미라미',
            },
            content: '우와 SNS다~',
        },{
            User: {
                nickname: '함지',
            },
            content: '제 유튜브에도 놀러오세요~'
        }]
    }],
    imagePaths: [], // 이미지 업로드 시 이미지 경로 저장 곳
    postAdded: false, // 게시글 추가 완료 시 true 로 바뀜
};

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}
const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
      id: 1,
      nickname: '리미',
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts], // 앞에 추가해야 가장 상단에 올라감
                postAdded: true,
            }
        default:
            return state;
    }
}

export default reducer;