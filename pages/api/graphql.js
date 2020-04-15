import axios from 'axios';

export default async (req, res) => {
    // Destructure incoming request
    const {
        method,
    } = req

    if (method != 'GET') {
        return res.status(405).send()
    }

    try {
        // gets attractions based on lat long variables
        const response = await axios({
            "method": "POST",
            "url": "https://reddit-graphql-proxy.p.rapidapi.com/graphql",
            "headers": {
                "content-type": "application/json",
                "x-rapidapi-host": "reddit-graphql-proxy.p.rapidapi.com",
                "x-rapidapi-key": process.env.RAPIDAPI_KEY,
                "accept": "application/json"
            },
            "data": {
                "query": `
                query BigQuery($name: String!, $name2: String!, $q: String!, $count: Int){
                    reddit {
                      firstSubreddit: subreddit(name: $name){
                        newListings(limit: 4) {
                          ...comparisonFields
                        }
                      }
                      secondSubreddit: subreddit(name: $name2){
                        newListings(limit: 4) {
                          ...comparisonFields
                        }
                      }
                    }
                    twitter {
                      search(q: $q, count: $count) {
                        id
                        created_at
                        text
                        retweet_count
                        user {
                          screen_name
                          name
                          profile_image_url
                          followers_count
                        }
                      }
                    }
                    giphy {
                      search(query: "#coronavirus", rating: r){
                        id
                        url
                        images {
                          fixed_width_downsampled {
                            url
                          }
                        }
                      }
                    }
                  }
                  fragment comparisonFields on RedditLink {
                        title
                        url
                        comments {
                            body
                        }
                  }
                `,
                "operationName": "BigQuery",
                "variables": {
                    "name": "Coronavirus",
                    "name2": "politics",
                    "count": 5,
                    "q": "coronavirus"
                }
            }
        })

        res.send(response.data)
    } catch (e) {
        // returns bad request error if something goes wrong
        res.status(400).send()
    }
}