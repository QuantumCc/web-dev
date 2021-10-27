import React from 'react';

const WhoToFollowListItem = ( {
                                  who = {
                                      avatarIcon: '../../../images/nasa.png',
                                      userName: 'NASA',
                                      handle: 'NASA',
                                  }
                              }
) => {

    return (`
        <li className="list-group-item">
        <div className="row">
            <div className="col-3">
                <img width="45px" src={who.avatarIcon}/></div>
            <div className="col-6">
                <b>{who.userName}</b> <i className="fas fa-check-circle"></i>
                <div>@{who.handle}</div>
            </div>
            <div className="col-1">
                <button className="btn btn-primary mx-auto">Follow</button>
            </div>
        </div>
    </li>
`);
}

export default WhoToFollowListItem;