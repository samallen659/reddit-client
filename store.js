import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/post/postSlice/postSlice';
import commentReducer from './features/comment/commentSlice/commentSlice';

export const store = configureStore({
    reducer: {
        post: postReducer,
        comment: commentReducer,
    },
});
