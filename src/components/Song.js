import React from "react"
import './Song.css';

const Song = ({song}) => {

    return (
        <>
        <div className="flex-container">
            
            <div className="flex-item">
                 <a href={song["im:collection"].link.attributes.href}><li>{song.title.label}</li></a>
            </div>
            <div className="flex-item" id="album-cover">
                 <img src={song["im:image"][2].label}/>
            </div>
            <div className="flex-item">
                <audio controls>
                    <source src={song["link"][1].attributes.href}/>
                </audio>
            </div>
            
        </div>
        </>
    )

};




export default Song;