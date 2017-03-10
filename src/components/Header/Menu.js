import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaUser from 'react-icons/lib/fa/user'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import { Link } from 'react-router'
import './Menu.sass'

export default () => (
    <div className='Menu'>
        <Link to='/'>
            <div className='item bio'>
                <FaUser className='icon'
                    size={ 48 } />
            </div>
        </Link>
        <Link to='likes'>
            <div className='item likes'>
                <FaThumbsUp className='icon'
                    size={ 48 } />
            </div>
        </Link>
        <Link to='contact'>
            <div className='item contact'>
                <FaEnvelope id='contact'
                    className='icon'
                    size={ 48 } />
            </div>
        </Link>
    </div>
)