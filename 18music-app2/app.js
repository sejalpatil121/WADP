const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/music', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schema and Model
const songSchema = new mongoose.Schema({
  songname: String,
  film: String,
  music_director: String,
  singer: String,
  actor: String,
  actress: String
});

const Song = mongoose.model('Song', songSchema);


app.get('/clear', async (req, res) => {
    await Song.deleteMany({});
    res.send("All songs deleted.");
});

// Insert 5 Songs (only once)
app.get('/insert', async (req, res) => {
    await Song.deleteMany({});
  const songs = [
    { songname: "Tum Hi Ho", film: "Aashiqui 2", music_director: "Mithoon", singer: "Arijit Singh", actor: "Akshay", actress: "Kajol"},
    { songname: "Chaiyya Chaiyya", film: "Dil Se", music_director: "A.R. Rahman", singer: "Sukhwinder Singh" },
    { songname: "Kal Ho Naa Ho", film: "Kal Ho Naa Ho", music_director: "Shankar-Ehsaan-Loy", singer: "Sonu Nigam" },
    { songname: "Jeene Laga Hoon", film: "Ramaiya Vastavaiya", music_director: "Sachin-Jigar", singer: "Atif Aslam" },
    { songname: "Tera Ban Jaunga", film: "Kabir Singh", music_director: "Akhil Sachdeva", singer: "Akhil Sachdeva" }
  ];
  await Song.insertMany(songs);
  res.send("Songs Inserted");
});

// d) Count and display all
app.get('/songs', async (req, res) => {
  const count = await Song.countDocuments();
  const songs = await Song.find();
  res.render('songs', { count, songs });
});

// e) List songs by Music Director
app.get('/musicdirector/:name', async (req, res) => {
  const songs = await Song.find({ music_director: req.params.name });
  res.json(songs);
});

// f) List songs by Music Director and Singer
app.get('/md-singer', async (req, res) => {
  const { md, singer } = req.query;
  const songs = await Song.find({ music_director: md, singer });
  res.json(songs);
});

// g) Delete a song you don’t like
app.get('/delete/:name', async (req, res) => {
  await Song.deleteOne({ songname: req.params.name });
  res.send("Song Deleted");
});

// // h) Add new favorite song
app.post('/add', async (req, res) => {
  const { songname, film, music_director, singer } = req.body;
  await Song.create({ songname, film, music_director, singer });
  res.send("Favorite Song Added");
});

//Render add song form
app.get('/add-form', (req, res) => {
    res.render('add-form');
  });
  
  // Render update actor form
  app.get('/update-form', (req, res) => {
    res.render('update-form');
  });

// i) Songs by singer from a film
app.get('/film-singer', async (req, res) => {
  const { film, singer } = req.query;
  const songs = await Song.find({ film, singer });
  res.json(songs);
});


// // j) Update song with actor and actress
app.post('/update-actor', async (req, res) => {
  const { songname, actor, actress } = req.body;
  await Song.updateOne({ songname }, { actor, actress });
  res.send("Updated with Actor & Actress");
});



app.listen(3000, () => console.log('Server running on http://localhost:3000'));
