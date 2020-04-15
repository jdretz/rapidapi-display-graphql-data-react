import React from 'react'

const Giphy = (props) => (
    <>
        <a target="blank" href={props.giphyUrl} rel="noopener noreferrer" className="gif">
            <img key={props.id} src={props.url} alt="giphy image"  />
        </a>
        <style jsx>{`
        .gif {
            display: inline;
            margin: 3px;
            padding: 3px
        }

        a {
            text-decoration: none;
        }
        `}
        </style>
    </>
)

export default Giphy