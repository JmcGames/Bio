import FaPhone from 'react-icons/lib/fa/phone'
import FaGithub from 'react-icons/lib/fa/github'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import { map } from '../HOC'
import './Contact.sass'

export default () => (
    <div className="contact-page">
        <div className="header">
            <h1>Contact</h1>
            <span>{ contactInfo }</span>
        </div>
        { map( services, Service ) }
    </div>
);

const contactInfo = "If you have questions feel free to contact me on any of the following services.";
const services = [
    { Icon: FaPhone, service: "Telephone", address: "1-587-340-6773" },
    { Icon: FaEnvelope, service: "Email", address: "jessemcprescott@gmail.com" },
    { Icon: FaGithub, service: "GitHub", address: "JmcGames" }
];

const Service = ({ Icon, service, address }, key) => (
    <div className="service" key={ key }>
        <Icon size={30} />
        { service + " at " + address }
    </div>
);