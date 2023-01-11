const Post = ({
    subreddit,
    selftext,
    author_fullname,
    title,
    downs,
    ups,
    upvote_ratio,
    score,
    created,
    id,
    is_video,
}) => {
    const handleClick = () => {
        console.log(title);
    };

    return (
        <div
            className="mx-auto max-h-[630px] w-[630px] max-w-[640px] cursor-pointer bg-white"
            onClick={handleClick}
        >
            <p>{title}</p>
        </div>
    );
};

export default Post;
