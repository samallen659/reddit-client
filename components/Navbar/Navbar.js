import RedditLogoText from '../../public/reddit-logo-text.svg';
import RedditLogoIcon from '../../public/reddit-logo-icon.svg';
import SearchIcon from '../../public/search.svg';

const Navbar = () => {
	return (
		<nav data-testid='navbar' className='fixed flex w-screen  items-center justify-center bg-white'>
			<div data-testid='logo-container' className='absolute left-0 top-0 flex items-center gap-2 px-2 py-4'>
				<RedditLogoIcon width={32} height={32} />
				<RedditLogoText width={57} height={18} />
			</div>
			<form className='w-[672px] py-2'>
				<label htmlFor='default-search' className='sr-only mb-2 text-sm font-medium text-gray-900'>
					Search
				</label>
				<div className='relative right-0 max-w-2xl'>
					<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
						<svg
							aria-hidden='true'
							className='h-5 w-5 text-gray-500'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
						</svg>
					</div>
					<input
						type='search'
						id='default-search'
						className='block w-full rounded-3xl border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
						placeholder='Search reddit'
						required
					/>
					<button
						type='submit'
						className='absolute right-2.5 bottom-2.5 rounded-3xl bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>
						Search
					</button>
				</div>
			</form>
		</nav>
	);
};

export default Navbar;
