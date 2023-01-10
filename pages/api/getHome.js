const getHome = async (req, res) => {
	if (req.method === 'GET') {
		try {
			const response = await fetch('https://www.reddit.com/.json');
			const data = await response.json();
			res.status(200).json(data.data);
		} catch (e) {
			console.log(e);
			res.status(400);
		}
	} else {
		res.status(404);
	}
};

export default getHome;
