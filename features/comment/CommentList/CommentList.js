import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => {
    return (
        <ul className="rounded-sm border border-slate-300 bg-white">
            {comments.map((comment) => {
                return (
                    <li className="p-2">
                        <Comment
                            key={comment.data.id}
                            body={comment.data.body}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default CommentList;
