import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../features/post/PostList/PostList';
import { fetchHomePagePosts } from '../features/post/postSlice/postSlice';

export default function Home() {
    return (
        <div>
            <h1 className="text-4xl">Hello Tailwind!</h1>
            <div>
                <PostList />
            </div>
        </div>
    );
}
