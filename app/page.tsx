"use client";
import Header from "@/ui/Header";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: var(--bgColor, #efeff7);
`;
const Main = styled.div`
  min-width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 75px;
`;

export default function Page() {
  return (
    <Container>
      <Main>
        <Header></Header>
      </Main>
    </Container>
  );
}
