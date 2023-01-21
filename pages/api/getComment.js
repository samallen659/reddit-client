const getComment = async (req, res) => {
    if (req.method === 'GET') {
        const { subreddit, user, title } = req.query;
        const fetchUrl = `https://reddit.com/r/${subreddit}/comments/${user}/${title}.json`;
        console.log(fetchUrl);
        try {
            const response = await fetch(fetchUrl);
            const data = await response.json();
            const { after, before, children, dist } = await data[0].data;
            res.status(200).json([
                { after, before, children, dist },
                {
                    after: data[1].data.after,
                    before: data[1].data.before,
                    children: data[1].data.children,
                },
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
