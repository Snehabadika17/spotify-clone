const express = require('express');
const router = express.Router();

// Example data (replace with actual database integration)
let songs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', albumArt: 'path_to_image' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', albumArt: 'path_to_image' },
];

// GET /api/songs
router.get('/', (req, res) => {
  res.json(songs);
});

// POST /api/songs
router.post('/', (req, res) => {
  const { title, artist, albumArt } = req.body;
  const newSong = { id: songs.length + 1, title, artist, albumArt };
  songs.push(newSong);
  res.status(201).json(newSong);
});

module.exports = router;
