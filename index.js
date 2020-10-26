const express = require('express');
const mongoose = require('mongoose');
const Note = require('./Note');
const colors = require('colors');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost/notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
  app.get('/note/:id', (req, res) => {
    Note.findById(req.params.id, (err, note) => {
      if (err) res.send(err);
      res.send(note);
    });
  });

  app.post('/note/new', (req, res) => {
    Note.create(req.body, (err, note) => {
      if (err) res.send(err);
      res.send(note);
    });
  })

  app.get('/notes/list', (req, res) => {
    Note.find({}, (err, result) => {
      if(err) res.send(err);
      res.send(result);
    });
  });


  app.listen(1337, () => {
    console.log('App is running on port 1337'.rainbow);
  })
});
