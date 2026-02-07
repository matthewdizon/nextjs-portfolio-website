import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0 48px;
  background-color: var(--color-soft);
  text-align: center;

  h1 {
    font-size: 48px;
    margin: 0;
  }

  p {
    max-width: 720px;
    color: var(--color-muted);
  }

  hr {
    height: 4px;
    width: 120px;
    background-color: var(--color-primary);
    border: none;
    margin-top: 24px;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 36px;
    }

    p {
      max-width: 90%;
    }
  }
`;

export default function Hero({ title, description }) {
  return (
    <StyledHero>
      <h1>{title}</h1>
      <p>{description}</p>
      <hr />
    </StyledHero>
  );
}