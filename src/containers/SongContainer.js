import React, { useState, useEffect } from "react";
import SongList from "../components/SongList";
import './SongContainer.css';


const SongContainer = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchSongs();
    }, [])

    const fetchSongs = function(){
        console.log("Found Songs")
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(songs => setSongs(songs.feed.entry))
        console.log(songs)
    }
    return (
        <>
        <h1>iTunes Charts </h1>
        <div className="main-container">
            <SongList songs={songs} />
        </div>
        </>

    );

}

export default SongContainer;