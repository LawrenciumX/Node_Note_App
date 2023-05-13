const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Note-taking API');
});

app.get('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('notes.json'));

    if(!req.query.id){
       res.json(notes);
    }
    else{
      const note = notes.find(note => note.id == req.query.id);
      res.json(note);
    }

});

app.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('notes.json'));
for (let i = 0; i < req.body.length; i++) {
    const note = {id: uuidv4(), text: req.body[i].text, body: req.body[i].body};
    notes.push(note);
}
fs.writeFileSync('notes.json', JSON.stringify(notes));
res.json(notes);
});

app.put('/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('notes.json'));

const index = notes.findIndex(
    note => note.id == req.params.id
);


if (index !== -1) {

    notes[index].text = req.body[0].text;
    notes[index].body = req.body[0].body;
    fs.writeFileSync('notes.json', JSON.stringify(notes));
    res.json(notes[index]);
} else {
    res.send({message:"No note found"});
}
});

app.delete('/notes/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('notes.json'));

const index = notes.findIndex(note => note.id == req.params.id);

if (index !== -1) {

    notes = notes.filter(note => note.id != req.params.id);

    fs.writeFileSync('notes.json', JSON.stringify(notes));
    res.send({message:"Successfully deleted note"});
} else {
    res.send({message:"No note found"});
}
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

