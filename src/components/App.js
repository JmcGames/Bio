import Logo from './Header/Logo'
import Menu from './Header/Menu'
import '../stylesheets/global.scss'

export default ({ children }) => (
    <div>
        <Logo />
        <Menu />
        { children }
    </div>
)