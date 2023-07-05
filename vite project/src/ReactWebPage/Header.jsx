 import logo from "./images/work.png"
 
 export default function Header1(){
    return(
<header>
        <nav className="BarNav">
        <img src={logo} className="ImagePic"/>
        <h3></h3>
        <ul className="Nav-Items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    </header>
    )
}
