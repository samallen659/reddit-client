const getHome = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const response = await fetch('https://www.reddit.com/.json');
            const data = await response.json();
            const { after, before, children, dist } = await data.data;
            const mappedChildren = await children.map((child) => ({
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
                url_overridden_by_dest: child.data.url_overridden_by_dest,
            }));
            res.status(200).json({
                after,
                before,
                children: mappedChildren,
                dist,
            });
        } catch (e) {
            console.log(e);
            res.status(400);
        }
    } else {
        res.status(404);
    }
};

export default getHome;

/* 

*/
