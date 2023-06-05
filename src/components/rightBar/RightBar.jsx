import './rightBar.scss'
import smiling_woamn from "../../assets/smiling_woman.png"

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        {/* first child */}
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <span>Thales Awor</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <span>Thales Solomon</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        {/* second child */}
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <p>
                <span>Thales Awor</span> changed their cover picture
              </p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <p>
                <span>Thales Awor</span> changed their cover picture
              </p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <p>
                <span>Thales Awor</span> changed their cover picture
              </p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <p>
                <span>Thales Awor</span> changed their cover picture
              </p>
            </div>
            <span>2 min ago</span>
          </div>
        </div>
        {/* third child */}
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <div className="online" />
              <span>Thales Awor</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <div className="online" />
              <span>Thales Awor</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <div className="online" />
              <span>Thales Awor</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <div className="online" />
              <span>Thales Awor</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={smiling_woamn} alt="" />
              <div className="online" />
              <span>Thales Awor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
