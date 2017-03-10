import JsIcon from 'react-icons/lib/fa/javascript'
import FaHtml5 from 'react-icons/lib/fa/html5'
import FaCss3 from 'react-icons/lib/fa/css3'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import './Skills.sass'


const TileContent = [
    {
        title: "Html5",
        Icon: FaHtml5,
        children: [
            'Haml',
            'PHP'
        ]
    },
    {
        title: "Css3",
        Icon: FaCss3,
        children: [
            "Sass",
            "Scss",
            "Less"
        ]
    },
    {
        title: "JavaScript",
        Icon: JsIcon,
        children: [
            'React',
            'Redux',
            'JQuery',
            'Canvas Animations'
        ]
    },
    {
        title: 'Game Dev',
        Icon: FaGamepad,
        children: [
            'DOM',
            'Html5 Canvas',
            'GameMaker Studio',
            'Python Pygame'
        ]    
    }
];

export default () => (
    <div className="Skills">
        <h1>Skills and Abilities</h1> 
        <div className="content">
            { TileContent.map(( element, key ) => (
                <Tile { ...element }
                    key={ key }/>
            ))}
        </div>
    </div>
)

const Tile = ({Icon, title, children}) => (
    <div className="tile">
        <CoverTile Icon={ Icon }
            title={ title }/>
        <InnerTile title={ title } 
            children={ children }/>
    </div>
);

const CoverTile = ({ Icon, title }) => (
    <div className={"cover-tile " + title}>
        <Icon className={ 'icon icon-' + toClassName( title )}
            size={ 60 }/>
        <span className="label">{ title }</span>
    </div>
);

const InnerTile = ({children, title}) => (
    <div className={ "inner-tile " + toClassName( title )}>
        { children.map(( child, id ) => ( 
            <span key={ id }>{ child }</span>
        ))}
    </div>
);

const toClassName = name => name.replace( ' ', '-' ).toLowerCase();