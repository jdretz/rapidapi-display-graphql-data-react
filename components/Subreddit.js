import React from 'react'

const Comment = (props) => (
    <>
        <p>{props.text}</p>
        <style jsx>{`
        p {
            max-width: 60%;
            margin: .5rem auto;
            padding: .3rem;
            font-style: italic;
            text-align: left;
        }
        `}
        </style>
    </>
)

const Subreddit = (props) => (
    <div className="wrapper">
        <a target="_blank" rel="noopener noreferrer" href={props.url}>{props.title}</a>
        {props.comments.map((comment, i) => <Comment key={i} text={comment.body} />)}
        <style jsx>{`
        div {
            text-align: center;
        }
        a {
            text-decoration: none;
            font-size: 2rem;
            font-weight: 100;
            margin: auto;
        }

        .wrapper {
            margin-top: .75rem;
            margin-bottom: .75rem;
            padding: 1rem;
        }
        `}
        </style>
    </div>
)

export default Subreddit