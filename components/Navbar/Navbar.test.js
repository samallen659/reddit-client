import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
	it('renders the navbar', () => {
		render(<Navbar />);
		expect(screen.getByTestId('navbar')).toBeInTheDocument();
	});
	it('renders the logo-container', () => {
		render(<Navbar />);
		expect(screen.getByTestId('logo-container')).toBeInTheDocument();
	});
	it('renders the search bar', () => {
		render(<Navbar />);
		expect(screen.getByPlaceholderText('Search reddit')).toBeInTheDocument();
	});
	it('renders the search button', () => {
		render(<Navbar />);
		expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
	});
	it('calls the search function when the button is pressed', () => {
		const submitMock = jest.fn();
		render(<Navbar submitFunction={submitMock} />);
		const searchBar = screen.getByPlaceholderText('Search reddit');
		const searchButton = screen.getByRole('button', { name: 'Search' });
		fireEvent.change(searchBar, { target: { value: 'Some Text' } });
		fireEvent.click(searchButton);
		expect(submitMock).toHaveBeenCalled();
	});
});
