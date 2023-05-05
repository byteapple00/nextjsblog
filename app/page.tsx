import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";


const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post)=>(
        <PostPreview key={post.slug}{...post}/>

    ));
    return (
    <div>
        <div className="grid grid-cols-1 gap-4">
            <div className='border border-violet-200 p-4 rounded-md shadow-md bg-white'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
            </div>
        </div>

    </div>
    )
};

export default HomePage;