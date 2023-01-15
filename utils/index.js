export const getRoundedScoreText = (score) => {
    const numLength = score.toString().length;
    console.log(numLength);
    let scoreText;
    if (numLength > 3) {
        if (numLength < 7) {
            if (numLength === 4)
                scoreText = (score / 1000).toFixed(1).toString() + 'K';
            if (numLength === 5)
                scoreText = Math.round(score / 1000).toString() + 'K';
            if (numLength === 6)
                scoreText = Math.round(score / 1000).toString() + 'K';
        } else {
            if (numLength === 7)
                scoreText = (score / 1000000).toFixed(1).toString() + 'M';
            if (numLength === 8)
                scoreText = Math.round(score / 1000000).toString() + 'M';
            if (numLength === 9)
                scoreText = Math.round(score / 1000000).toString() + 'M';
        }
    } else {
        scoreText = score.toString();
    }
    return scoreText;
};
