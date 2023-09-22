import React from "react";
import Select from "react-select";
import styled from "styled-components";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 250px;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 13px;
  background: var(--White, #fff);
  min-width: 164px;
  height: 55px;
  padding: 0 17px;
`;
const SelectName = styled.span`
  color: var(--Gray-40, #a8a8a8);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SelectDiv = () => {
  const customStyles = {
    option: (defaultStyles: any, state: { isSelected: any }) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#000",
      backgroundColor: state.isSelected ? "#a0a0a0" : "#fff",
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "#fff",
      padding: "0px",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "#000" }),
  };
  return (
    <Container>
      <Main>
        <SelectName>Sort by:</SelectName>
        <Select options={options} styles={customStyles} />
      </Main>
    </Container>
  );
};

export default SelectDiv;
