import './topbar.scss'
import {Person} from "@material-ui/icons";
import {Mail} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' +(menuOpen && 'active')}>
      <div className="wrapper">
          <div className="left">
            <a href="#intro"className='logo'>Marco's portfolio</a>
            <div className="itemContainer">
              <Person className='icon'/>
              <span>+506 8340 6324</span>
            </div>
            <div className="itemContainer">
              <Mail className='icon'/>
              <span>maviquez1@gmail.com</span>
            </div>
          </div>
       {/*  right side */}
          <div className="right">
              <div className="hambuger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
              </div>
          </div>
      </div>
    </div>
  )
}
