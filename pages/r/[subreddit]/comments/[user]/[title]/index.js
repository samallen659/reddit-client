import { useRouter } from 'next/router';

export default function comment() {
    const router = useRouter();
    return (
        <div>
            <div>
                <h1 className="text-3xl">Comment</h1>
                <h2 className="text-2xl">{router.query.subreddit}</h2>
                <h2 className="text-2xl">{router.query.user}</h2>
                <h2 className="text-2xl">{router.query.title}</h2>
            </div>
        </div>
    );
}
