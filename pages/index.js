import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../features/post/PostList/PostList';
import { fetchHomePagePosts } from '../features/post/postSlice/postSlice';

export default function Home() {
    return (
        <div>
            <div>
                <PostList />
            </div>
        </div>
    );
}
