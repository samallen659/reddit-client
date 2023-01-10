import { createSlice } from '@reduxjs/toolkit';

export const fetchHomePagePosts = () => {
	return async (dispatch) => {
		const response = await fetch('api/getHome');
		const data = await response.json();
		const { after, before, children, dist } = await data;
		dispatch(setChildren({ children: [...children] }));
		dispatch(setAfter({ after }));
		dispatch(setBefore({ before }));
		dispatch(setDist({ dist }));
	};
};

const postSlice = createSlice({
	name: 'post',
	initialState: {
		after: '',
		before: '',
		children: [],
		dist: 0,
	},
	reducers: {
		setChildren: (state, action) => {
			state.children = action.payload.children;
		},
		setAfter: (state, action) => {
			state.after = action.payload.after;
		},
		setBefore: (state, action) => {
			state.before = action.payload.before;
		},
		setDist: (state, action) => {
			state.dist = action.payload.dist;
		},
	},
});

export const { setChildren, setAfter, setBefore, setDist } = postSlice.actions;
export default postSlice.reducer;
