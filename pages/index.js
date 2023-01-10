import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomePagePosts } from '../features/post/postSlice/postSlice';

export default function Home() {
	const [redditData, setRedditData] = useState('');
	const dispatch = useDispatch();
	const child = useSelector((state) => state.post.children[0]);
	// const getRedditHomeData = async () => {
	// 	const req = await fetch('/api/getHome');
	// 	const data = await req.json();
	// 	console.log(data);
	// 	setRedditData(data);
	// };
	useEffect(() => {
		dispatch(fetchHomePagePosts());
	}, []);
	return (
		<div>
			<h1 className='text-4xl'>Hello Tailwind!</h1>
		</div>
	);
}
