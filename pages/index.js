import React from 'react'
import axios from 'axios'
import Twitter from '../components/Twitter'
import Giphy from '../components/Giphy'
import Subreddit from '../components/Subreddit'

export default function Index() {
    let [data, setData] = React.useState('')
    let [loading, setLoading] = React.useState(true) // new

    React.useEffect(() => {
        // fetches data from our api
        axios({
            method: 'GET',
            url: '/api/graphql',
        })
        .then(response => {
            // add data to state
            setData(response.data.data)
            setLoading(false)
        })
        .catch(error => {
            setLoading(false)
            console.log(error)
        })
    }, [])
    return (
<div>
        <h1>Using a GraqhQL Api with React.js</h1>
        {loading && <span>Data is loading...</span>}
        <main>
            <section id="reddit">
                <h2>Subreddits</h2>
                <h3>Coronavirus</h3>
                {data && data.reddit.firstSubreddit.newListings.map(item => {
                    return <Subreddit
                        url={item.url}
                        title={item.title}
                        comments={item.comments}
                    />
                })}
                <h3>Politics</h3>
                {data && data.reddit.secondSubreddit.newListings.map(item => {
                    return <Subreddit
                        url={item.url}
                        title={item.title}
                        comments={item.comments}
                        key={item.title}
                    />
                })}
            </section>
            <section id="twitter">
                <h2>Twitter</h2>
                {data && data.twitter.search.map(tweet => {
                    return <Twitter
                        text={tweet.text}
                        time={tweet.created_at}
                        name={tweet.user.name}
                        screen_name={tweet.user.screen_name}
                        followers={tweet.user.followers_count}
                        profileImageUrl={tweet.user.profile_image_url}
                        key={tweet.id}
                    />
                })}
            </section>
            <section id="giphy">
                <h2>Giphy</h2>
                {data.giphy && data.giphy.search && data.giphy.search.map(gif => {
                    return <Giphy
                        url={gif.images.fixed_width_downsampled.url}
                        id={gif.id}
                        key={gif.id}
                        giphyUrl={gif.url}
                    />
                })}
            </section>
        </main>
        <style jsx>{`
        h2, h3 {
            display: block;
            width: auto;
            font-size: 2rem;
            padding: 5px 10px;
            margin: 5px;
        }

        h3 {
            font-size: 1.3rem;
            display: inline-block;
            background: black;
            color: white;
        }

        main {
            display: flex;
        }

        #giphy {
            text-align: center;
        }

        #giphy > h2 {
            background: #39ff14;
            color: black;
            border: 2px solid black;
        }

        #twitter > h2 {
            background: white;
            color: #55acee;
            border: 2px solid #55acee;
        }

        #reddit > h2 {
            background: #FF4301;
            color: white;
            border: 2px solid #FF4301;
        }

        h1 {
            font-family: monospace;
            text-align: center;
            font-size: 4rem;
        }
        `}
        </style>
      </div>
    );
}