import "./App.css";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [displayKey, setDisplayKey] = useState("");
  const effectRan = useRef(false);

  useEffect(() => {

    if (effectRan.current === true) {
      document.addEventListener("keydown", (e) => {
        e.preventDefault();
        notes.forEach((note) => {
          if (note.key.toUpperCase() === e.key.toUpperCase()) {
            document.getElementById(note.key.toUpperCase()).play();

            setDisplayKey(note.name)
            
            const target = document.getElementById(note.name);
            target.style.backgroundColor = "skyblue";
            target.style.marginTop = "13px";
            target.style.boxShadow = "skyblue 0 3px";
            target.style.height = "77px";

            setTimeout(() => {
              target.style.backgroundColor = "pink";
              target.style.marginTop = "10px";
              target.style.boxShadow = "black 3px 3px 5px";
              target.style.height = "";
            }, 200);

          }
        })

      });
    };

    return () => {
      effectRan.current = true;
    }

  });

  const notes = [
    { key: "Q", name: "Heater 1", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { key: "W", name: "Heater 2", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { key: "E", name: "Heater 3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { key: "A", name: "Heater 4", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { key: "S", name: "Clap", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { key: "D", name: "Open HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { key: "Z", name: "Kick n'Hat", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { key: "X", name: "Kick", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { key: "C", name: "Closed HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
  ];

  const audioOnClick = (e, note) => {
    document.getElementById(note.key).play();

    setDisplayKey(note.name)

    e.target.style.backgroundColor = "skyblue";
    e.target.style.marginTop = "13px";
    e.target.style.boxShadow = "skyblue 0 3px";
    e.target.style.height = "77px";

    setTimeout(() => {
      e.target.style.backgroundColor = "pink";
      e.target.style.marginTop = "10px";
      e.target.style.boxShadow = "black 3px 3px 5px";
      e.target.style.height = "";
    }, 200);
  };

  return (
    <div className="App">
      <Card id="drum-machine">
        <Typography variant="h4" component="div">
          Drum Machine
        </Typography>
        <div className="pad-bank">

          {notes.map(note => {
            return <div
              className="drum-pad"
              id={note.name}
              key={note.key}
              onClick={(e) => audioOnClick(e, note)}
              style={{ backgroundColor: "pink", marginTop: "10px", boxShadow: "black 3px 3px 5px" }}>
              <audio className="clip" id={note.key} src={note.src}></audio>
              {note.key}
            </div>
          })}

        </div>
        <div className="controls-container">
          <Typography variant="body1" id="display">{displayKey}</Typography>
        </div>

      </Card>

    </div>
  );
}

export default App;
