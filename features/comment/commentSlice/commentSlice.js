import { createSlice } from '@reduxjs/toolkit';

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
