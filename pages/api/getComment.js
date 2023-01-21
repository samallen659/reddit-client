const getComment = async (req, res) => {
    if (req.method === 'GET') {
        const { subreddit, user, title } = req.query;
        const fetchUrl = `https://reddit.com/r/${subreddit}/comments/${user}/${title}.json`;
        console.log(fetchUrl);
        try {
            const response = await fetch(fetchUrl);
            const data = await response.json();
            const { after, before, children, dist } = await data[0].data;
            const postData = await children.map((child) => ({
                subreddit: child.data.subreddit,
                selftext: child.data.selftext,
                author_fullname: child.data.author_fullname,
                title: child.data.title,
                downs: child.data.downs,
                ups: child.data.ups,
                upvote_ratio: child.data.upvote_ratio,
                score: child.data.score,
                created: child.data.created,
                id: child.data.id,
                is_video: child.data.is_video,
                url_overridden_by_dest:
                    child.data.url_overridden_by_dest === undefined
                        ? ''
                        : child.data.url_overridden_by_dest,
                secure_media: child.data.secure_media,
                permalink: child.data.permalink,
                over_18: child.data.over_18,
                thumbnail: child.data.thumbnail,
            }));
            const replyData = await mapReplies(data[1].data.children);
            // console.log(replyData);
            res.status(200).json([
                { after, before, children: postData, dist },
                { comments: replyData },
            ]);
            // res.status(200).json(data);
        } catch (e) {
            console.log(e);
            res.status(404);
        }
    } else {
        res.status(404);
    }
};

export default getComment;

const mapReplies = async (replies) => {
    return replies.map((child) => {
        console.log(child.data.id);
        const { id, body, author, author_fullname, score } = child.data;
        const replies = child.data.replies
            ? mapReplies(child.data.replies.data.children)
            : '';
        return { id, body, author, author_fullname, score, replies };
    });
};
