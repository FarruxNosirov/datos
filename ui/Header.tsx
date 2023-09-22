import Search from "@/components/Search";
import SelectDiv from "@/components/Select";

import { Container, Title } from "@/styles/Header.styled";
import React, { useState } from "react";

const Header = () => {
  const [defaultBuy, setDefaultBuy] = useState({
    data: "",
    price: 0,
  });
  const changeBuyPrice = (e: any) => {
    let value = e.target.value;
    console.log({ e });

    console.log(value);
    setDefaultBuy({ ...defaultBuy, price: value });
  };
  return (
    <Container>
      <Title>Datos</Title>
      <Search onChange={changeBuyPrice} />
      <SelectDiv />
    </Container>
  );
};

export default Header;
