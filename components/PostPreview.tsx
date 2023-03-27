import Link from 'next/link';
import { PostMetadata } from './PostMetadata';

export const PostPreview = (props: PostMetadata) => {
    return (
        <div className='border border-violet-200 p-4 rounded-md shadow-md bg-white'>
            <Link href={`/posts/${props.slug}`}>
            <h2 className='font-bold hover:underline'>{props.title}</h2>
            </Link>
            <p>{props.subtitle}</p>
            <p>{props.date}</p>
        </div>
    )
};

export default PostPreview;