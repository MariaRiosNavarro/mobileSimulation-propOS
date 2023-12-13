import { useState } from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation";
import { StyledAnswer } from "../../components/Layout";
import { ThemeContext } from "../../pages/_app";
import { useContext } from "react";
import { StyledQuestionLabel } from "../../components/Layout";
import {
  AppContainer,
  NoSchrollbarContainer,
} from "../../components/components.style";
import Button from "../../components/Button";

// -----------------------------------------STYLE

const StyledLoading = styled.p`
  background-color: gray;
  padding:4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  
`;

const StyledHeading = styled.h5`
  text-align: center;
  font-size: large;
  margin: 0;
`;

const CenterFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 3rem;
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

const StyledHeadingContainer = styled.div`
  margin-top: 3rem;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  padding: 2rem;
  &:hover {
    border: 2px solid var(--hover-color);
  }
  width: 20rem;
`;

// -----------------------------------------FUNCTION

export default function AskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isFetching, setIsFetching] = useState(false); // loading state
  const { theme, customColor } = useContext(ThemeContext);

  if (isFetching) {
    return <StyledLoading>AI chat esta por ahora deactivado..</StyledLoading>;
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
      <AppContainer>
        <NoSchrollbarContainer>
          <CenterFlexContainer>
            <StyledHeadingContainer>
              <StyledHeading>
                <strong>Deine PropOS</strong>
              </StyledHeading>
              <StyledHeading>
                <strong>Assistentin</strong>
              </StyledHeading>
            </StyledHeadingContainer>
            {answer && (
              <StyledAnswer id="answer" theme={theme} customColor={customColor}>
                {answer}
              </StyledAnswer>
            )}
            <StyledForm onSubmit={handleSubmit}>
              <StyledQuestionLabel
                htmlFor="question"
                theme={theme}
                customColor={customColor}
              >
                Frage:
              </StyledQuestionLabel>
              <StyledTextarea
                value={question}
                type="text"
                name="question"
                id="question"
                cols={40}
                rows={6}
                onChange={(event) => setQuestion(event.target.value)}
              />

              <Button type="submit" name="Senden" />
            </StyledForm>
          </CenterFlexContainer>
        </NoSchrollbarContainer>
        <Navigation />
      </AppContainer>
    </>
  );
}
