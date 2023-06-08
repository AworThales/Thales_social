import { Link } from 'react-router-dom'
import './navBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import smiling_woman from "../../assets/smiling_woman.png"
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';


const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  


  return (
    <div className='navbar'>
      {/* first child */}
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>ThalesSocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle} />}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Second child */}
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePic} />  
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
