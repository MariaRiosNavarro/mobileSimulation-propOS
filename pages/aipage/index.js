import { useState } from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation";

const StyledLoading = styled.p`
  background-color: gray;
`;

const StyledHeading = styled.h5`
  text-align: center;
  font-size: large;
  margin: 0;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 0;
  padding-bottom: 5rem;
  background-color: rosybrown;
  height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledTextarea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  width: 20rem;
  &:focus {
    border: 2px solid var(--primary-color);
  }
  &:hover {
    border: 2px solid var(--hover-color);
  }
`;

const StyledButton = styled.button`
  margin-top: 2rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 8px;
  padding: 1rem;
  width: 20rem;
  &:hover {
    background-color: var(--hover-color);
  }
`;

const StyledLabel = styled.label`
  font-size: large;
  font-weight: bolder;
  color: var(--secondary-color);
`;

const StyledHeadingContainer = styled.div`
  margin-top: 3rem;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  padding: 2rem;
  &:hover {
    border: 2px solid var(--hover-color);
  }
`;

const StyledAnswer = styled.div`
  background-color: white;
  border-radius: 8px;
  font-family: system-ui;
  width: 20rem;
  padding: 1rem;
  border: 2px solid var(--primary-color);
  &:hover {
    border: 2px solid var(--hover-color);
  }
`;

export default function AskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isFetching, setIsFetching] = useState(false); // loading state

  if (isFetching) {
    return <StyledLoading>Laden...</StyledLoading>;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsFetching(true);
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answer: question,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        const answer = data.answer;
        setIsFetching(false);
        setAnswer(answer);
      } else {
        console.error("Fehlerhafte Antwort");
      }
    } catch (error) {
      console.error("Ein Fehler ist aufgetreten");
    }

    setQuestion("");
  }

  return (
    <>
      <StyledContainer>
        <StyledHeadingContainer>
          <StyledHeading>
            <strong>Deine PropOS</strong>
          </StyledHeading>
          <StyledHeading>
            <strong>Assistentin</strong>
          </StyledHeading>
        </StyledHeadingContainer>
        {answer && <StyledAnswer id="answer">{answer}</StyledAnswer>}
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="question">Frage: </StyledLabel>
          <StyledTextarea
            value={question}
            type="text"
            name="question"
            id="question"
            cols={40}
            rows={6}
            onChange={(event) => setQuestion(event.target.value)}
          />

          <StyledButton type="submit">Senden</StyledButton>
        </StyledForm>
      </StyledContainer>
      <Navigation />
    </>
  );
}
