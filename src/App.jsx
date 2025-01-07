import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const DrumElements = [
    { Key: "Q", Description: "Heater 1", Url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",},
    { Key: "W", Description: "Heater 2", Url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",},
    { Key: "E", Description: "Heater 3", Url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",},
    { Key: "A", Description: "Heater 4", Url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",},
    { Key: "S", Description: "Clap", Url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",},
    { Key: "D", Description: "Open-HH", Url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",},
    { Key: "Z", Description: "Kick-n'-Hat", Url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",},
    { Key: "X", Description: "Kick", Url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",},
    { Key: "C", Description: "Closed-HH", Url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",},
  ];

  const [keyName, setKeyName] = useState("");
  
  const audioRefs = useRef({});

  const handleClick = (description, key) => {
    setKeyName(description);
    const audio = audioRefs.current[key];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const drum = DrumElements.find((el) => el.Key === key);
    if (drum) {
      handleClick(drum.Description, drum.Key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <main id="drum-machine" className="flex justify-center items-center h-screen">
      <div id="display" className="flex flex-col bg-slate-600 m-2 p-6 rounded-lg shadow-lg">
        {}
        <div className="grid grid-rows-3 grid-flow-col gap-2">
          {DrumElements.map((drum, index) => (
            <button
              key={index}
              id={drum.Key}
              className="drum-pad text-white rounded-lg"
              onClick={() => handleClick(drum.Description, drum.Key)}
            >
              {drum.Key}
              <audio
                ref={(el) => (audioRefs.current[drum.Key] = el)}
                className="clip"
                id={drum.Key}
                src={drum.Url}
              ></audio>
            </button>
          ))}
        </div>
        {}
        <p className="px-4 py-3 mt-4 bg-slate-500 text-white font-medium text-center rounded-lg">
          {keyName || "Press a drum pad"}
        </p>
      </div>
    </main>
  );
}

export default App;
