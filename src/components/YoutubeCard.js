import React from 'react';
import VideoLogo from '../images/video-thumbnail.png';
import AppleIcon from '@material-ui/icons/Apple';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function YoutubeCard(props) {
    const { description } = props;

    return (
        <div>
            <img class="rounded-t-lg" src={VideoLogo} alt="video_thumbnail" />
            <div class="py-1 px-3">                
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-9">
                        <span class="hover:cursor-pointer mt-2 text-gray-900  text-sm tracking-tight uppercase">{description}</span>
                    </div>
                    <div class="col-span-3 gap-2">
                        <AppleIcon />
                        <PlayArrowIcon className ="ml-1"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YoutubeCard;