import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentPagePosts } from '../../../../../features/comment/commentSlice/commentSlice';
import Post from '../../../../../features/post/Post/Post';

export default function comment() {
    const router = useRouter();
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.children);
    const post = useSelector((state) => state.post.children[0]);
    const isLoading = useSelector((state) => state.comment.isLoading);
    console.log(post);

    useEffect(() => {
        if (router.isReady) {
            const { subreddit, user, title } = router.query;
            dispatch(fetchCommentPagePosts(subreddit, user, title));
        }
    }, [router.isReady]);
    return (
        <div>
            <div>
                <h1 className="text-3xl">Comment</h1>
                <h2 className="text-2xl">{router.query.subreddit}</h2>
                <h2 className="text-2xl">{router.query.user}</h2>
                <h2 className="text-2xl">{router.query.title}</h2>
            </div>
            <div>
                {isLoading ? (
                    <p>Loading</p>
                ) : (
                    <Post
                        key={post.data.id}
                        selftext={post.data.selftext}
                        title={post.data.title}
                        score={post.data.score}
                        is_video={post.data.is_video}
                        url_overridden_by_dest={
                            post.data.url_overridden_by_dest
                        }
                        secure_media={post.data.secure_media}
                        thumbnail={post.data.thumbnail}
                        summary={true}
                    />
                )}
            </div>
        </div>
    );
}
