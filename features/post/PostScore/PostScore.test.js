import PostScore from './PostScore';
import { screen, render } from '@testing-library/react';

describe('PostScore', () => {
    it('renders the upvote button', () => {
        render(<PostScore score={0} />);
        expect(screen.getByTestId('upvote')).toBeInTheDocument();
    });
    it('renders the downvote button', () => {
        render(<PostScore score={0} />);
        expect(screen.getByTestId('downvote')).toBeInTheDocument();
    });
    it('renders the score value', () => {
        render(<PostScore score={10} />);
        expect(screen.getByText(10)).toBeInTheDocument();
    });
});
