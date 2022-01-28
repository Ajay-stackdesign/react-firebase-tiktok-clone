import React, { useEffect, useState } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css"


function App() {
  const[videos, setVideos] = useState([])

  useEffect(() => {
    db.collection("videos").onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => doc.data()))
  ))
  },[videos])
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video url={url} channel={channel} description={description} song={song} likes={likes} messages={messages} shares={shares} />
          )
        )}
            
        {/* // <Video url="https://cdn.videosongstatus.com/30sec-status-video/RQ49Es2Nw3j.mp4"
        // channel="ajay sahani"
        // description="happy republic day"
        // song="song makes me feel patrotic"
        // likes={123}
        // messages={400}
        // shares={200}
        // />
        <Video />
        <Video />
        <Video /> */}
      </div>
    </div>
  );
}

export default App;
