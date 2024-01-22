import style from './NavbarComponent.module.css'

const NavbarComponent = () => {
    return (
        <>
           <nav className={style.navbar}>
                <div className={style["logo"]}>
                    <h2>Logo</h2>
                </div>
                <ul className={style["navbar-items"]}>
                    <li><a>Home</a></li>
                    <li><a>Contact</a></li>
                    <li><a>About</a></li>
                </ul>
            </nav> 
        </>
    )
}

export default NavbarComponent