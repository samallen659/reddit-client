import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
	it('renders the navbar', () => {
		render(<Navbar />);
		expect(screen.getByTestId('navbar')).toBeInTheDocument();
	});
	it('renders the logo-container', () => {
		render(<Navbar />);
		expect(screen.getByTestId('logo-container'));
	});
});
