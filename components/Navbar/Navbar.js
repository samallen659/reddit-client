import RedditLogoText from '../../public/reddit-logo-text.svg';
import RedditLogoIcon from '../../public/reddit-logo-icon.svg';

const Navbar = () => {
	return (
		<nav data-testid='navbar'>
			<div data-testid='logo-container'>
				<RedditLogoIcon />
				<RedditLogoText />
			</div>
		</nav>
	);
};

export default Navbar;
