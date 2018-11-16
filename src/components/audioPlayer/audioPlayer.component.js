import React from 'react';
import Audio from 'react-audioplayer';
import DYW from '../../audio/DoYouWanna.mp3';

const playlist = [
    {
        name: 'Do You Wanna',
        src: DYW,
        img: '',
        comments: ''
    }
]

const AudioPlayer = () => {
    return (
        <div>
            <h2>Audio Player</h2>
            <Audio 
                width={900}
                height={100}
                autoPlay={true}
                playlist={playlist}
            />
        </div>
    );
};


export default AudioPlayer;