import React from './post.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';
import { useState } from 'react';

const Post = ({post}) => {

    const [ commentOpen, setCommentOpen] = useState(false)

    // to be deleted
    const liked = false;

  return (
    <div className='post'>
      <div className="container">
          {/* first child */}
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color:"inherit"}}>
                        <span className='name'>{post.name}</span>  
                        </Link>
                        <span className='date' >2 min ago</span> 
                    </div>
                </div>
                <MoreHorizIcon />
            </div>
            {/* second child */}
            <div className="content">
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
            </div>
            {/* third child child */}
            <div className="info">
                <div className="item">
                   {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon/>} 
                   15 likes
                </div>
                <div className="item" onClick={ () => setCommentOpen(!commentOpen) }>
                   <TextsmsOutlinedIcon />
                   16 comments
                </div>
                <div className="item">
                   <ShareOutlinedIcon />
                   Share
                </div>
            </div>
            {commentOpen && <Comments />}
        </div>

    </div>
  )
}

export default Post
