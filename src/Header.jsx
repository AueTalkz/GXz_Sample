function Header() {
    return (
        <>
        <nav className="NavBar" id="NavBar">
            <div>
                <a href="./GXz Portfolio/index.html">
                    <img src="GXz.png" className="Nav-logo" alt="GXz Logo" id="Logo"></img>
                </a>

            </div>

            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
               </ul>

        </nav>
        </>
    )
}

export default Header;
