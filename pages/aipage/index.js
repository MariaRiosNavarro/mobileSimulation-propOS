import { useState } from "react";
import styled from "styled-components";

const StyledLoading = styled.p`
  background-color: gray;
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
    setIsFetching(true); //start loading
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
        setIsFetching(false); //end loading
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
      <h5>
        <strong>Assistant:</strong>
      </h5>
      {answer && <div id="answer">{answer}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">
          Frage:
          <input
            value={question}
            type="text"
            name="question"
            id="question"
            onChange={(event) => setQuestion(event.target.value)}
          />
        </label>
        <button type="submit">Senden</button>
      </form>
    </>
  );
}
