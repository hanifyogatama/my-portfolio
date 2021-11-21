import './topbar.scss'
import {Person, Mail, Description, GitHub} from '@material-ui/icons'


export default function Topbar( {menuOpen, setMenuOpen} ) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Hans.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+62 967 6310 705</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>hanifyotama@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <Description className="icon" />
                        <a href="https://drive.google.com/file/d/1VoVBuyoOsNNk5oKQe3fjTUZqhrgMjJ9d/view" target="_blank">Curriculum Vitae</a>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <a href="https://github.com/hanifyogatama" target="_blank">GitHub</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick = {()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
