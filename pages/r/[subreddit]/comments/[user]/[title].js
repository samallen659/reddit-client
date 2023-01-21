import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentPagePosts } from '../../../../../features/comment/commentSlice/commentSlice';

export default function comment() {
    const router = useRouter();
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.children);

    useEffect(() => {
        if (router.isReady) {
            console.log(router.query);
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
        </div>
    );
}
