import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                <li className="list-group-item">
                    <b>Who to follow</b>
                </li>
                {who.map(item => {
                    return(<WhoToFollowListItem who={who}/>);})}
            </ul>
); }
export default WhoToFollowList;
