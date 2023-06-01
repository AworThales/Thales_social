import { Link } from 'react-router-dom'
import './navBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>ThalesSocial</span>
        </Link>
        <HomeOutlinedIcon />
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Navbar
