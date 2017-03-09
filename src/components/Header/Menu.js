import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaUser from 'react-icons/lib/fa/user'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import { Link } from 'react-router'
import '../../stylesheets/menu.scss'

export default () => (
    <div className='menu'>
        <Link to='/'>
            <div className='menu-item bio'>
                <FaUser id='bio'
                    className='icon'
                    size={ 48 } />
                <span className='menu-item-text'></span>
            </div>
        </Link>
        <Link to='likes'>
            <div className='menu-item likes'>
                <FaThumbsUp className='icon'
                    size={ 48 } />
                <span className='menu-item-text'></span>
            </div>
        </Link>
        <Link to='contact'>
            <div className='menu-item contact'>
                <FaEnvelope id='contact'
                    className='icon'
                    size={ 48 } />
                <span className='menu-item-text'></span>
            </div>
        </Link>
    </div>
)