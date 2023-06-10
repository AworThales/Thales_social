import "./leftBar.scss"
import users from "../../assets/users.png"
import smiling_woman from "../../assets/smiling_woman.png"
import active_users from "../../assets/active_users.png"
import pricing from "../../assets/pricing.png"
import watch from "../../assets/watch.png"
import messages from "../../assets/messages.png"
import calendar from "../../assets/calendar.png"
import loan from "../../assets/loan.png"
import settlements from "../../assets/settlements.png"
import organizations from "../../assets/organizations.png"
import reports from "../../assets/reports.png"
import saving from "../../assets/saving.png"
import logs from "../../assets/logs.png"
import preference from "../../assets/preference.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);
  
  return (
    <div className="leftBar">
      {/* container */}
      <div className="container">
        {/* first menu */}
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={users} />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={active_users} />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={pricing} />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={watch} />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={messages} />
            <span>Memories</span>
          </div>
        </div>

        <hr />
      {/* second menu */}
      <div className="menu">
        <span>Your Shortcuts</span>
        <div className="item">
          <img src={calendar} />
          <span>Event</span>
        </div>
        <div className="item">
          <img src={loan} />
          <span>Gaming</span>
        </div>
        <div className="item">
          <img src={organizations} />
          <span>Gallery</span>
        </div>
        <div className="item">
          <img src={settlements} />
          <span>Videos</span>
        </div>
        <div className="item">
          <img src={reports} />
          <span>Messages</span>
        </div>
      </div>
      <hr />
      {/* third menu */}
      <div className="menu">
        <span>Others</span>
        <div className="item">
            <img src={saving} />
            <span>Fundraiser</span>
        </div>
        <div className="item">
            <img src={logs} />
            <span>Tutorials</span>
        </div>
        <div className="item">
            <img src={preference} />
            <span>Course</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LeftBar
