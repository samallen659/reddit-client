import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomePagePosts } from '../postSlice/postSlice';
import Post from '../Post/Post';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.children);

    useEffect(() => {
        dispatch(fetchHomePagePosts());
    }, []);

    return (
        <div className="flex flex-col gap-2">
            {posts.map((post) => {
                return <Post key={post.id} {...post} />;
            })}
        </div>
    );
};

export default PostList;
