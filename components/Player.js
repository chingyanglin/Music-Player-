import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
export default function Player({
  songs,
  setCurrentSong,
  currentSong,
  isPlaying,
  setIsPlaying,
  audioGrab,
  songTime,
  setSongTime,
}) {
  const skipHandler = (direction)=>{
    const songIndex = songs.findIndex(aSong=>aSong.id === currentSong.id)
    if(direction === 'skipforward'){
      setCurrentSong(songs[(songIndex+1)%songs.length])
      console.log(songs.length)
    } else if( direction ==='skipback'){
      if(songIndex === 0){
        let maxlength = songs.length -1
        setCurrentSong(songs[maxlength])
      }else{
        setCurrentSong(songs[songIndex -1])
      }
    }
  }




  const playSongHandler = () => {
    console.log(audioGrab);
    if (isPlaying) {
      audioGrab.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioGrab.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeFormat = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioGrab.current.currentTime = e.target.value;
    setSongTime({ ...songTime, currentTime: e.target.value });
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{timeFormat(songTime.currentTime)}</p>
        <input
          type="range"
          min={0}
          value={songTime.currentTime}
          max={songTime.duration || 0}
          onChange={dragHandler}
        />
        <p>{timeFormat(songTime.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
        onClick={()=>skipHandler('skipback')} 
        className="skipback" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          onClick={()=>skipHandler('skipforward')}
          className="skipforward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}
