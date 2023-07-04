import { useEffect } from "react";
import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import styled from "styled-components";

// Keyboard: https://hodgef.com/simple-keyboard/getting-started/react/

//change the input to p to prevent the default keyboard from appearing on mobile phones

const StyledContainer = styled.div`
  border: none;
`;
const StyledSendSMSContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPseudoInput = styled.p`
  width: 80%;
  background-color: white;
  margin: 0 1rem 0 1rem;
  border-radius: 8px;
  padding: 0.5rem;
`;

const StyledSendButton = styled.button`
  background-color: var(--primary-color);
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  width: 10rem;
  &:hover {
    background-color: var(--hover-color);
  }
`;

// New Paragraph where is the sended Message
const StyledSendedBackMessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
`;
const StyledSendedBackMessage = styled.p`
  background-color: lightgray;
  padding: 0.5rem;
  width: auto;
  margin: 0 1rem 0 1rem;
  border-radius: 20px 20px 0 20px;
  padding: 0.5rem;
  /* Render with propierties, if we see the sended Message or not */
  display: ${(props) => (props.show ? "inline" : "none")};
`;

// New Paragraph where is the sended BACK Message
const StyledSendedMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
const StyledSendedMessage = styled.p`
  background-color: lightblue;
  padding: 0.5rem;
  width: auto;
  margin: 0 1rem 0 1rem;
  border-radius: 20px 20px 0 20px;
  padding: 0.5rem;
  /* Render with propierties, if we see the sended Message or not */
  display: ${(props) => (props.show ? "inline" : "none")};
`;

export default function MyKeyboard() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (message !== "") {
      setShowMessage(true);
    }
  }, [message]);

  function handleSendSMS() {
    if (input !== "") {
      setMessage(input);
      setInput("");
    }
  }

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
      <StyledSendedBackMessageContainer>
        <StyledSendedBackMessage show={showMessage}>
          {message}
        </StyledSendedBackMessage>
      </StyledSendedBackMessageContainer>
      <StyledSendedMessageContainer>
        <StyledSendedMessage show={showMessage}>{message}</StyledSendedMessage>
      </StyledSendedMessageContainer>
      <StyledSendSMSContainer>
        <StyledPseudoInput
          contentEditable
          suppressContentEditableWarning
          onblur={(event) => setInput(event.target.innerText)}
        >
          {input}
        </StyledPseudoInput>
        <StyledSendButton onClick={handleSendSMS}>
          {"SMS senden"}
        </StyledSendButton>
      </StyledSendSMSContainer>
      <Keyboard
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={costumlayout}
      />
    </StyledContainer>
  );
}
