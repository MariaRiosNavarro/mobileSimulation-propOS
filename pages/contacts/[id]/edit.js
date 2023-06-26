import styled from "styled-components";
import { useRouter } from "next/router";
import { backSVG } from "../../../components/assets/contactsSVG";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Form from "../../../components/Form";
import useSWR from "swr";

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
  margin-top: 2rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 8px;
  padding: 1rem;
  width: 40%;
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

  return (
    <>
      <StyledBackLink href={"/contacts"}>{backSVG}</StyledBackLink>
      <Form
        onSubmit={handleEdit}
        formName={"edit-contact"}
        defaultData={contact}
      />
      <StyledButton onClick={handleDelete}>loschen</StyledButton>
      <Navigation />
    </>
  );
}
