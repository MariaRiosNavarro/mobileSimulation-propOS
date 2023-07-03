import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import styled from "styled-components";

// Keyboard: https://hodgef.com/simple-keyboard/getting-started/react/

const StyledPseudoInput = styled.p`
  width: 80%;
`;

const StyledContainer = styled.div``;

export default function MyKeyboard() {
  const [input, setInput] = useState("");

  const onChange = (input) => {
    console.log("Input changed", input);
    setInput(input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const costumlayout = {
    default: [
      "🚀 🐬 🐢 🥳 ❤️ 🤣 👩🏽‍💻 🌹 🍺 😭 😟",
      "1 2 3 4 5 6 7 8 9 0 \u00DF",
      "q w e r t z u i o p \u00FC",
      "a s d f g h j k l \u00F6 \u00E4 {enter}",
      "{shift} y x c v b n m {bksp}",
      ".com @ {space}",
    ],
    shift: [
      '\u00B0 ! " \u00A7 $ % & / ( ) = ? ` ',
      "{tab} Q W E R T Z U I O P \u00DC *",
      "{lock} A S D F G H J K L \u00D6 \u00C4 ' ",
      "{shift} > Y X C V B N M ; : _ {shift}",
      ".com @ {space}",
    ],
  };

  return (
    <StyledContainer>
      <StyledPseudoInput
        contentEditable
        suppressContentEditableWarning
        onblur={(event) => setInput(event.target.innerText)}
      >
        {input}
      </StyledPseudoInput>
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={costumlayout}
      />
    </StyledContainer>
  );
}
