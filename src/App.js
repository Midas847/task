import "./App.css";
import styled from "styled-components";
import background from "./images/bg-pattern.svg";
import circle from "./images/pattern-circles.svg";
import Pricing from "./components/Pricing";
import check from "./images/icon-check.svg";
import { mobile } from "./responsive";
import { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 4em;
  height: 20rem;
  background: url(${background}) no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  ${mobile({ padding: "0em" })}
`;

const Circles = styled.div`
  height: 10rem;
  width: 10rem;
  background: url(${circle}) no-repeat;
  background-size: cover;
  margin-top: -8rem;
  text-align: center;
  ${mobile({ height: "9rem", width: "9rem" })}
`;

const Title = styled.h1`
  font-family: "Manrope", sans-serif;
  font-size: 1.8em;
  color: hsl(227, 35%, 25%);
  ${mobile({ fontSize: "1.5em" })}
`;

const Header = styled.div`
  position: absolute;
  text-align: center;
  margin-bottom: 9rem;
`;

const Paragraph = styled.p`
  font-size: 15px;
  color: hsl(225, 20%, 60%);
  font-family: "Manrope", sans-serif;
`;

const Container = styled.div`
  position: absolute;
  width: 33rem;
  height: 20rem;
  background-color: #fff;
  margin-top: 27rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 0.5rem;
  ${mobile({ width: "22rem", height: "30rem", marginTop: "35rem" })}
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-top: 10px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 4px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: hsl(174, 86%, 45%);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Bill = styled.div`
  margin-top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Discount = styled.div`
  margin-left: 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 10px;
  padding: 1px 3px;
  color: hsl(15, 100%, 70%);
  background-color: hsl(14, 92%, 95%);
`;

const Monthly = styled.p`
  margin-left: 10px;
  color: hsl(227, 35%, 25%);
  opacity: 80%;
  ${mobile({ fontSize: "13px" })}
`;

const Line = styled.div`
  background-color: black;
  margin-top: 10px;
  height: 1px;
  width: 100%;
  opacity: 10%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;

const List = styled.li`
  list-style-image: url(${check});
  color: hsl(225, 20%, 60%);
  font-weight: 500;
  font-size: 15px;
`;

const Button = styled.button`
  padding: 10px 30px;
  border-radius: 20px;
  cursor: pointer;
  background: hsl(227, 35%, 25%);
  color: hsl(226, 100%, 87%);
  border: none;
  ${mobile({ marginTop: "10px" })}
`;

const Break = styled.br`
  display: none;
  ${mobile({ display: "block" })}
`;

function App() {
  return (
    <Wrapper>
      <Button>Dark</Button>
      <Header>
        <Title>Simple, traffic-based pricing</Title>
        <Paragraph>
          Sign-up for our 30-day trial.
          <Break /> No credit card required.
        </Paragraph>
      </Header>
      <Container>
        <Pricing />
        <Bill>
          <Monthly>Monthly Billing</Monthly>
          <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
          <Monthly>Yearly Billing</Monthly>
          <Discount>25% discount</Discount>
        </Bill>
        <Line></Line>
        <Footer>
          <div>
            <ul>
              <List>Unlimited Websites</List>
              <List>100% data ownership</List>
              <List>Email reports</List>
            </ul>
          </div>
          <div>
            <Button>Start my trial</Button>
          </div>
        </Footer>
      </Container>
      <Circles></Circles>
    </Wrapper>
  );
}

export default App;
