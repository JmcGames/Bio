import FaHeart from 'react-icons/lib/fa/heart'
import { map } from '../HOC'
import './Likes.sass'

export default () => (
    <div className="Likes">
        <h1>Likes and Interests</h1>
        <div className="tiles">
            {map( content, Tile )}
        </div>
    </div> 
);

const Tile = ({ videoId, title, content }, key) => (
    <div className="tile" key={ key }>
        <YtEmbed videoId={ videoId }/>
        <div className="text">
            <a href={ YtHref( videoId ) }>
                <h2>{ title }</h2>
            </a>
            <div>{ content }</div>
        </div>
    </div>
);

const YtEmbed = ({ videoId }) => (
    <iframe src={ "https://www.youtube.com/embed/" + videoId } 
        allowFullScreen>
    </iframe>
);

const YtHref = videoId => "https://www.youtube.com/watch?v=" + videoId

const content = [
    { 
        videoId: "J-bC20aAat8",
        title: "Immutable Data on the Front-End", 
        content: "David Nolen with an incredible talk, as always, about the benefits of immutable\
            data structures for user interface development. In 2014, at the time of this presentation\
            immuitability was not as prevalent on the front-end as it is today. I consider myself lucky\
            to be in a time with open source libraries like Facebook's immutable.js and ClojureSciprt's\
            Mori."
    },
    {
        videoId: "-9ZQmX8clNU",
        title: "Emotional Intelligence with Tony Robbins",
        content: "How often have you found yourself beaming with happiness, but wanting to be\
            miserable or depressed? Me neither! Emotional control is of crucial importance to live\
            well, and therefore it is one of my main focuses in life. I am not new to the study of\
            psychology and emotional intelligence and this video is by far the best I've seen on\
            the subject."
    },
    {
        videoId: "1zj7M1LnJV4",
        title: "What If the User Was a Function?",
        content: "Incredible talk by André Staltz, the creator of Cycle Js. A framework designed to\
            facilitate \"Human Computer Interactions\" which André claims, quite convincingly, are \
            cycles."
    }
]