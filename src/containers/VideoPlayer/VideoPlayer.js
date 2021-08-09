import React, { useEffect, useLocation } from 'react'
import YouTube from 'react-youtube';

function VideoPlayer(props) {
    const { video_id } = props.location.aboutProps   

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        }
    }
    return (
        <div className="container mx-auto px-10 py-10 justify-center">
            <YouTube className="mx-auto" videoId={video_id} opts={opts} onReady={(e) => { e.target.pauseVideo() }} />
        </div>
    )
}
export default VideoPlayer;