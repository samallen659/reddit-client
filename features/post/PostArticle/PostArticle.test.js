import PostArticle from './PostArticle';
import { screen, render } from '@testing-library/react';

describe('PostArticle', () => {
    it('renders a link to the article', () => {
        const url = 'https://www.bbc.co.uk/news/uk-64279654';
        render(
            <PostArticle
                url={url}
                thumbnail="https://b.thumbs.redditmedia.com/_YQWb6axMlMIne6KFOnCktybwxT7WksOrcBk6QhDy2U.jpg"
            />
        );
        expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', url);
    });
    it('renders the thumbnail img', () => {
        const url = 'https://www.bbc.co.uk/news/uk-64279654';
        render(
            <PostArticle
                url={url}
                thumbnail="https://b.thumbs.redditmedia.com/_YQWb6axMlMIne6KFOnCktybwxT7WksOrcBk6QhDy2U.jpg"
            />
        );
        expect(screen.getByTestId('article-img')).toBeInTheDocument();
    });
});
