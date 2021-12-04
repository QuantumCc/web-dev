import React from 'react';

const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "../../../images/react-blue.png"
                             }
                         }
) => {
    return(
        <>
          <div className="list-group-item">
            <div classname="row">
                <div className="col-10">
                    <p className="text-secondary mb-1">{post.topic}</p>
                    <b>{post.userName}</b>
                    <i className="fas fa-check-circle"></i>
                    <span className="text-secondary">{post.time}</span>
                    <b>{post.title}</b>
                </div>
                <div className="col-1">
                    <a href="explore-settings.html">
                        <img src={post.image} width="30px" height="25px" />
                    </a>
                </div>
            </div>
          </div>
        </>
    );
}
export default PostSummaryItem;