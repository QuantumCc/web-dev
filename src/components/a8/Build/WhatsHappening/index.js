import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet, fetchAllTweets}
    from "../../../../services/tweetService";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        postNewTweet(dispatch, {
            tweet: whatsHappening
        });
    }
    return (
        <div style={{ marginBottom: '20px' }}>
            <div style={{ verticalAlign: 'top' }}>
                <img
                    className="rounded-circle"
                    style={{ width: '50px', height: '50px', margin: '20px'}}
                    src="../../../images/reactJS.png"
                />
            </div>
            <div className="w-100">
                <textarea
                    className = "w-100 text-secondary"
                    style={{padding: "0px", paddingTop: "20px", backgroundColor: "black"}}
                    placeholder="What's happening?"
                    onChange={(event) =>
                        setWhatsHappening(event.target.value)}></textarea>
                <hr/>
                <span>
                    <i className="fa fa-image me-3"></i>
                    <i className="fa fa-chart-line me-3"></i>
                    <i className="fa fa-smile me-3"></i>
                    <i className="fa fa-calendar me-3"></i>
                </span>
                <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                    Tweet
                </button>
            </div>
        </div>
    );
};

export default WhatsHappening;
