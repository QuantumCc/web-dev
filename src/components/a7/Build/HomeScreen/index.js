import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="...">
                <NavigationSidebar active="home"/>
            </div>
            <div className="..."
                 style={{"position": "relative"}}>
                <WhatsHappening />
                <TweetList/>
            </div>
            <div className="...">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
    )
}

export default HomeScreen;
