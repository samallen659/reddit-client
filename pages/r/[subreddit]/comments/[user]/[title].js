import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentPagePosts } from '../../../../../features/comment/commentSlice/commentSlice';
import Post from '../../../../../features/post/Post/Post';
import CommentList from '../../../../../features/comment/CommentList/CommentList';

export default function comment() {
    const router = useRouter();
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.children);
    const post = useSelector((state) => state.post.children[0]);
    const isLoading = useSelector((state) => state.comment.isLoading);

    useEffect(() => {
        if (router.isReady) {
            const { subreddit, user, title } = router.query;
            dispatch(fetchCommentPagePosts(subreddit, user, title));
        }
    }, [router.isReady]);
    return (
        <div className="mx-auto max-w-[630px] pt-4">
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <>
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
                    <div className="py-2"></div>
                    <CommentList comments={comments} />
                </>
            )}
        </div>
    );
}
