const PostArticle = ({ url, thumbnail }) => {
    return (
        <div className="flex w-full justify-between">
            <div className="flex items-center justify-start">
                <a href={url}>{url}</a>
            </div>
            <a href={url} className="h-[116px] w-36 rounded-lg">
                <img data-testid="article-img" src={thumbnail} alt="" />
            </a>
        </div>
    );
};

export default PostArticle;
