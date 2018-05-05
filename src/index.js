import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function Tweet() {
    return (
        <div className="tweet">
            <Avatar/>
            <div className="content">
                <NameWithHandle/>
                <Time/>
                <Message/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    )

}

function Avatar() {
    return (
        <img
            src="https://www.gravatar.com/avatar/nothing"
            className="avatar"
            alt="avatar"
        />
    )

}

function Message() {
    return (
        <div className="message">
            That's my first tweet.
        </div>
    )
}

function NameWithHandle() {
    return(
        <span className="name-with-handle">
            <span className="name">Ostap Voroniak</span>
            <span className="handle">@ostapik</span>

        </span>
    )

}

const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const  MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet />, document.getElementById('root'));
registerServiceWorker();
