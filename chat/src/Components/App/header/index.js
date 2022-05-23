import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <NavLink
                className={(isActive) =>
                    isActive ? styles.header_item : styles.active
                }
                to="/"
            >
                Main
            </NavLink>
            <NavLink
                className={(isActive) =>
                    isActive ? styles.header_item : styles.active
                }
                to="chat/"
            >
                Chat page
            </NavLink>
        </header>
    )
}

export default Header
