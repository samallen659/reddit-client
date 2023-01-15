import ReactMarkdown from 'react-markdown';
import ReactPlayer from 'react-player';
import PostArticle from '../PostArticle/PostArticle';
import PostScore from '../PostScore/PostScore';
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
    url_overridden_by_dest,
    permalink,
    secure_media,
    thumbnail,
}) => {
    const handleClick = () => {
        console.log(title);
    };

    const getContent = () => {
        let returnContent = '';
        if (selftext !== '') {
            returnContent = (
                <ReactMarkdown children={selftext} className="text-left" />
            );
        } else if (is_video === true) {
            console.log(url_overridden_by_dest);
            returnContent = (
                <div className="aspect-video">
                    <ReactPlayer
                        url={`${secure_media.reddit_video.hls_url}`}
                        controls="true"
                        width="100%"
                        height="100%"
                    />
                </div>
            );
            console.log(secure_media);
        } else if (url_overridden_by_dest !== '') {
            if (/(.jpg$|.gif$|.png$)/.test(url_overridden_by_dest)) {
                returnContent = (
                    <div className="flex justify-center">
                        <img
                            src={url_overridden_by_dest}
                            alt=""
                            className="max-h-[512px]"
                        />
                    </div>
                );
            } else {
                returnContent = (
                    <PostArticle
                        url={url_overridden_by_dest}
                        thumbnail={thumbnail}
                    />
                );
            }
        }
        return returnContent;
    };

    return (
        <div
            className="flex max-h-[630px] w-full cursor-pointer overflow-hidden rounded-sm border border-slate-300 bg-white hover:border-slate-400"
            onClick={handleClick}
        >
            <div className="w-10 bg-slate-100">
                <div>
                    <PostScore score={score} />
                </div>
            </div>
            <div className="flex max-h-[630px] w-full flex-col justify-center ">
                <div className="">
                    <div></div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="max-h-[630px] w-full">{getContent()}</div>
            </div>
        </div>
    );
};

export default Post;
