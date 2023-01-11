import { store } from '../../../store';
import { setAfter, setBefore, setChildren, setDist } from './postSlice';

describe('postSlice', () => {
	describe('setChildren reducer', () => {
		it('adds the child to the children array', () => {
			const child = {
				subreddit: 'subreddit',
				selftext: 'some selftext',
			};
			store.dispatch(setChildren({ children: [child] }));
			expect(store.getState().post.children[0]).toBe(child);
		});
	});
	describe('setAfter reducer', () => {
		it('sets the after value', () => {
			const after = 'after';
			store.dispatch(setAfter({ after }));
			expect(store.getState().post.after).toBe(after);
		});
	});
	describe('setBefore reducer', () => {
		it('sets the before value', () => {
			const before = 'before';
			store.dispatch(setBefore({ before }));
			expect(store.getState().post.before).toBe(before);
		});
	});
	describe('setDist reducer', () => {
		it('sets the dist value', () => {
			const dist = 'dist';
			store.dispatch(setDist({ dist }));
			expect(store.getState().post.dist).toBe(dist);
		});
	});
});
