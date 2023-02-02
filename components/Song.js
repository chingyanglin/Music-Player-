import React from "react";
export default function Song({ songs, currentSong, setCurrentSong }) {
  return (
    <div>
      <div className="song">
        <img src={currentSong.cover} alt="album cover" />
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>
    </div>
  );
}
