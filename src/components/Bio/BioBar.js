import { Link } from 'react-router'
import './BioBar.sass'

export default () => (
    <div className='BioBar'>
        <img src='assets/me-smaller.png' />
        <div>Hello and welcome! I am a programmer and my name is Jesse. I am 
        obsessed with personal development, exercise for aesthetics, and above 
        all coding. At present, I am a computing science student at Athabasca 
        University. I consider JavaScript to be my native language, with a heavy 
        React accent; however this accent has been known to be quite...
        polymorphic. If you have any inquiries please don't hesitate to 
        <Link to='contact'> contact me</Link>. </div>
    </div>
);
