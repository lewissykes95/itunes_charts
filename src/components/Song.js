import React from "react";

const Song = ({song}) => {

    return (
        <>
            <a href={song["im:collection"].link.attributes.href}><li>{song.title.label}</li></a>
            <img src={song["im:image"][2].label}/>
        </>
    )

};




export default Song;