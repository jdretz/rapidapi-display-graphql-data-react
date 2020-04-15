import React from 'react'

const Twitter = (props) => (
    <div className="main-wrapper">
        <div className="user-wrapper">
            <>
                <img src={props.profileImageUrl} alt="" />
            </>
            <div className="user-info">
                <span><b>{props.name}</b></span>
                <span>{props.screen_name}</span>
                <small>{props.followers} followers</small>
                <span>{new Date(props.time).toLocaleString()}</span>
            </div>
        </div>
        <>
            <p>{props.text}</p>
        </>
        <style jsx>{`
        .main-wrapper {
            display: flex;
            box-shadow: 0px 0px 12px #CCC;
            border-radius: 5px;
            border: 2px solid #55acee;
            flex-direction: column;
        }

        .user-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        img {
            object-fit: contain;
        }

        .user-info {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: flex-start;
        }

        p {
            max-width: 500px;
            margin: .25rem .6rem;
            font-size: 1.2rem;
        }

        span {
            margin-top:3px;
            margin-bottom: 3px;
        }

        div {
            margin: 5px;
            padding: 5px;
        }
      `}</style>
    </div>
)

export default Twitter