# Drum Machine

This is a **Drum Machine** built using React. The application allows users to interact with various drum sounds by either clicking on the drum pads or pressing the corresponding keys on their keyboard. Each drum pad plays a unique sound when triggered.

## Features
- Plays drum sounds when the user clicks on the respective drum pad.
- Responds to keyboard events, allowing users to play sounds by pressing the assigned keys (Q, W, E, A, S, D, Z, X, C).
- Displays the name of the sound currently playing at the bottom.
- Built with React for handling state and interactions.

## Technologies Used
- **React**: For building the user interface and managing state.
- **CSS**: For styling the application.
- **Audio API**: For playing sound clips when the drum pads are triggered.

## How It Works
1. The app contains a set of drum pads, each corresponding to a specific sound.
2. Clicking on a drum pad or pressing the associated key (Q, W, E, A, S, D, Z, X, C) will play the associated sound.
3. The app uses the `useRef` hook to handle audio elements and the `useEffect` hook to listen for keyboard events.
4. The name of the currently playing drum sound is displayed below the pads.
5. The user can interact with the app by either clicking the drum pads or using the keyboard.
