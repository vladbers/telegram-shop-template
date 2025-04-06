import styled from 'styled-components';

export const CartButton = styled.button`
  border: 0;
  padding: 0;
  width: 80%;
  height: 50px;
  color: #ffffff;
  position: relative !important;
  background-color: green !important;
  text-align: center;
  position: fixed !important;
  bottom: 20px;
  left: 20px;
  right: 20px;
  margin: 0 auto;
  cursor: pointer;
  z-index: 2;
  border-radius: 18px;
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }
  &:hover {
    filter: brightness(85%);
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IContainer {
  isOpen: boolean;
}
export const Container = styled.div<IContainer>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  z-index: 99;
  transition: right 0.2s;

  ${CartButton} {
    left: ${({ isOpen }) => (isOpen ? '0' : '0px')};
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.black : theme.colors.primary};
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 450px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-450px')};
  }
`;

interface ICartIcon {
  large?: boolean;
}
export const CartIcon = styled.div<ICartIcon>`
  width: ${({ large }) => (large ? '60px' : '50px')};
  height: ${({ large }) => (large ? '60px' : '50px')};
  position: relative;
  margin-right: 15px;
  background-image: url(${require('static/cart-icon.png')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  background-size: 50%;
`;

export const CartTextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  color: #ffffff;
  position: relative;
`;
export const Close = styled.div`
  z-index: 20 !important;
  position: absolute !important;
  top: 10px !important;
  right: 10px !important;
  color: #ffffff !important;
  background-color: #000000;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10%;
  &:hover {
    background-color: #333333;
  }
`;
export const CartQuantity = styled.div`
  width: 18px;
  height: 18px;
  color: #0c0b10;
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const CartContent = styled.div`
  height: 100%;
  overflow-y: scroll;

  /* MAC scrollbar para desktop*/
  @media screen and (min-width: 640px) {
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #0c0b10;
    }
  }
`;

export const CartContentHeader = styled.div`
  color: #ececec;
  box-sizing: border-box;
  text-align: center;
  padding: 45px 0;
`;

export const HeaderTitle = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  vertical-align: middle;
`;

export const Sub = styled.p`
  width: 20%;
  color: #5b5a5e;
  vertical-align: middle;
  display: inline-block;
`;

export const SubPrice = styled.div`
  width: 80%;
  text-align: right;
  color: #5b5a5e;
  vertical-align: middle;
  display: inline-block;
`;

export const SubPriceValue = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 22px;
  margin: 0;
`;

export const SubPriceInstallment = styled.p`
  margin: 0;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  border: 0;
  color: #ececec;
  text-transform: uppercase;
  background-color: #0c0b10;
  text-align: center;
  padding: 15px 0;
  margin-top: 40px;
  cursor: pointer;
  outline: none;

  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    background-color: #000;
  }
`;

export const CartFooter = styled.div`
  box-sizing: border-box;
  padding: 5%;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.primary};

  &::before {
    content: '';
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    top: -20px;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  }
`;
