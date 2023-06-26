import styled from "styled-components";
import { useRouter } from "next/router";
import { backSVG } from "../../../components/assets/contactsSVG";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Form from "../../../components/Form";
import useSWR from "swr";
import { StyledButtonsContainer } from "../../../components/components.style";
//new library to make confirm delete message, styles in styles.js
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const StyledSuccessMessage = styled.h5`
  text-align: center;
  background-color: green;
  padding: 1rem;
  margin: 4rem;
  border-radius: 8px;
`;

const StyledBackLink = styled(Link)`
  position: absolute;
  margin-left: 2rem;
`;

const StyledButton = styled.button`
  background-color: var(--primary-color);
  border: none;
  border-radius: 8px;
  padding: 1rem;
  width: 20rem;
  &:hover {
    background-color: var(--hover-color);
  }
`;
//----------------------------------------------- FUNCTION------------HERE

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const id = router.query.id;
  const {
    data: contact,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/contacts/${id}`);

  async function handleEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const contactData = Object.fromEntries(formData);
    const response = await fetch(`/api/contacts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (response.ok) {
      console.log(response);
      mutate();
    }

    router.push(`/contacts`);
  }
  if (!isReady || isLoading || error || !id) return <h2>Loading</h2>;

  async function handleDelete() {
    await fetch(`/api/contacts/${id}`, {
      method: "DELETE",
    });
    router.push("/contacts");
  }

  //ConfirmAlert Library

  function submitDelete() {
    confirmAlert({
      message: "Kontakt löschen?",
      buttons: [
        {
          label: "löschen",
          onClick: () => handleDelete(),
        },
        {
          label: "Abrechen",
          //onClick: () => alert('Click No')
        },
      ],
    });
  }

  return (
    <>
      <StyledBackLink href={"/contacts"}>{backSVG}</StyledBackLink>
      <Form
        onSubmit={handleEdit}
        formName={"edit-contact"}
        defaultData={contact}
      />
      <StyledButtonsContainer>
        <StyledButton onClick={submitDelete}>loschen</StyledButton>
      </StyledButtonsContainer>
      <Navigation />
    </>
  );
}
