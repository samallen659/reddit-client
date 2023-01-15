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
        <div
            data-testid="post-container"
            className="mx-auto flex max-w-[630px] flex-col gap-2"
        >
            {posts.map((post) => {
                return <Post key={post.id} {...post} />;
            })}
        </div>
    );
};

export default PostList;
