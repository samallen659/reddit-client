import { createSlice } from '@reduxjs/toolkit';
import { setCommentPagePost } from '../../post/postSlice/postSlice';

export const fetchCommentPagePosts = (subreddit, user, title) => {
    return async (dispatch) => {
        console.log('fetch');
        const response = await fetch(
            `/api/getComment?subreddit=${subreddit}&user=${user}&title=${title}`
        );
        const data = await response.json();
        dispatch(setCommentPagePost(data[0].children, data[0].dist));
        const { after, before, children } = data[1];
        dispatch(setCommentChildren({ children: [...children] }));
        dispatch(setCommentAfter({ after }));
        dispatch(setCommentBefore({ before }));
    };
};

export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        before: '',
        after: '',
        children: [],
    },
    reducers: {
        setCommentChildren: (state, action) => {
            state.children = action.payload.children;
        },
        setCommentAfter: (state, action) => {
            state.after = action.payload.after;
        },
        setCommentBefore: (state, action) => {
            state.before = action.payload.before;
        },
    },
});

export const { setCommentAfter, setCommentBefore, setCommentChildren } =
    commentSlice.actions;
export default commentSlice.reducer;
