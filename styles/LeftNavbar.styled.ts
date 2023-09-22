import styled from "styled-components";

export const NavbarStyled = styled.div`
  height: 100vh;
  width: 74px;
  z-index: 100;
  top: 0;
  transition: 0.5s;
  background: #fff;
  box-shadow: 4px 0px 15px -5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 50px 0;
`;
export const LogoImage = styled.div`
  cursor: pointer;
`;
export const LogOutBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
  }
`;
export const NavigationIconsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavigationIcons = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  margin: 10px 0;
  &:hover {
    transform: scale(1.1);
  }
`;
