import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json"

const PostSummaryList = () => {
    return (
    <ul className="list-group">
        {posts.map(item => {
            return(<PostSummaryItem post={item} />);
        })
    }
    </ul>
);}
export default PostSummaryList;