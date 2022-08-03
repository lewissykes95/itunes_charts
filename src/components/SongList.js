import React from "react";
import Song from "./Song";


const SongList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return <Song song={song} key={index}/>
    })

    return (

        <div>
            <ol>
                {songItems}
            </ol>
        </div>

    );
}

export default SongList;