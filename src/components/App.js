import Logo from './Header/Logo'
import Menu from './Header/Menu'

export default ({ children }) => (
    <div>
        <Logo />
        <Menu />
        { children }
    </div>
)