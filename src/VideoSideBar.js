import React, { useState } from "react";
// import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
// import MessageSharpIcon from '@mui/icons-material/MessageSharp';
// import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import "./VideoSideBar.css"
// import { IconButton } from "@mui/material";

const VideoSideBar = ({ likes, shares, messages }) => {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSideBar">
            {/* <div className="sideBar">
                <IconButton >
                    <FavoriteBorderSharpIcon className="favoriteSide"/>
                </IconButton>
                <IconButton>
                    <MessageSharpIcon className="messageSide"/>
                </IconButton>
                <IconButton>
                    <ShareSharpIcon className="shareSide"/>
                </IconButton>
                
            </div> */}
            <div className="videoSideBar__button">
                { liked ? (
                    <FavoriteIcon fontSize="large"
                    onClick={(e) => setLiked(false)}/>
                ): ( 
                    <FavoriteBorderIcon
                    fontSize="large" 
                    onClick={(e) => setLiked(true) }
                    />
                )} 
                <p>{ liked ? likes+1 : likes }</p>   
            </div>
            <div className="videoSideBar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSideBar__button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar