import { getRoundedScoreText } from '../../../utils';

const PostScore = ({ score }) => {
    return (
        <div>
            <button data-testid="upvote"></button>
            <h3 data-testid="score">{getRoundedScoreText(score)}</h3>
            <button data-testid="downvote"></button>
        </div>
    );
};

export default PostScore;
