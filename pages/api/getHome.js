const headers = {
    include_over_18: false,
};

const getHome = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const response = await fetch('https://www.reddit.com/.json', {
                method: 'GET',
                headers,
            });
            const data = await response.json();
            const { after, before, children, dist } = await data.data;
            const filteredChildren = children.filter(
                (child) => child.data.over_18 === false
            );
            res.status(200).json({
                after,
                before,
                children: filteredChildren,
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
