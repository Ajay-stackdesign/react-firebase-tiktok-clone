import React, { useRef, useState } from "react"
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";
import "./Video.css"

const Video = ({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares,
}) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onPressVideo = () => {
        if (playing){
            videoRef.current.pause();
            setPlaying(false)
        }else{
            videoRef.current.play();
            setPlaying(true)
        }
    };
    return(
        <div className="video">
            <video 
                className="video__player"
                loops
                ref={videoRef}
                onClick={onPressVideo}
                src={url}>
            </video>
            <VideoFooter channel={channel} 
                description={description}
                song={song}
            />
            <VideoSideBar likes={likes} messages={messages} shares={shares} />
            <h1>{/* videofooter*/}</h1>
            <h1>{/* videosidebar */}</h1>
        </div>
    )
}

export default Video