import React, { useState, useEffect } from 'react';
import axios from 'axios'; // for making HTTP requests

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    // Fetch songs from backend API
    axios.get('/api/songs')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    // Implement play functionality
  };

  const pauseSong = () => {
    setIsPlaying(false);
    // Implement pause functionality
  };

  const skipSong = () => {
    // Implement skip functionality
  };

  return (
    <div className="app">
      <header>
        <h1>My Music App</h1>
      </header>
      <div className="song-list">
        {songs.map(song => (
          <div key={song.id} className="song">
            <img src={song.albumArt} alt={`${song.title} - ${song.artist}`} />
            <div className="song-info">
              <h2>{song.title}</h2>
              <p>{song.artist}</p>
              <button onClick={() => playSong(song)}>Play</button>
            </div>
          </div>
        ))}
      </div>
      {currentSong && (
        <div className="player">
          <h3>Now Playing</h3>
          <img src={currentSong.albumArt} alt={`${currentSong.title} - ${currentSong.artist}`} />
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
          {isPlaying ? (
            <button onClick={pauseSong}>Pause</button>
          ) : (
            <button onClick={() => playSong(currentSong)}>Play</button>
          )}
          <button onClick={skipSong}>Skip</button>
        </div>
      )}
    </div>
  );
};

export default App;
