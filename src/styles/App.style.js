import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.bg ?? ""};
    color: ${(props) => props.color ?? ""};
  }
`;

export const ContainerApp = styled.div`
  padding: 1rem 2.5rem;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 3.5rem;
  background-color: ${(props) => props.bg ?? "white"};

  @media screen and (max-width: 600px) {
    padding: 25px 1rem;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: ${(props) => props.align ?? "center"};
  justify-content: ${(props) => props.jc ?? "space-between"};
  margin-bottom: ${(props) => props.mb ?? "0"};
  cursor: ${(props) => props.cursor ?? "pointer"};

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: ${(props) => props.fd ?? "column"};
    align-items: ${(props) => props.alignI ?? "baseline"};
    flex-flow: wrap;
  }
`;

export const Title = styled.h2`
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const TitleCard = styled.h3`
  margin: 20px 0;
`;

export const SubTitle = styled.h4`
  margin: 0 0 0 10px;
`;

export const Line = styled.hr`
  margin: 0;
  border-width: 2px;
  border-color: ${(props) => props?.border};
`;

export const Bottom = styled.div`
  margin-left: 10px;
  padding: 10px 10px 10px 0px;
  justify-content: center;
  border-radius: 5px;
  width: 105px;
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.bg ?? "#c2c2c28c"};
  -webkit-box-shadow: 0px 0px 24px -9px rgba(120, 120, 120, 0.8);
  -moz-box-shadow: 0px 0px 24px -9px rgba(120, 120, 120, 0.8);
  box-shadow: 0px 0px 24px -9px ${(props) => props.boxS ?? "rgba(120, 120, 120, 0.8)"};
  background-color: ${(props) => props?.bg};
`;

export const Text = styled.p`
  margin: 0;
  font-size: 0.95rem;
`;

export const TextCard = styled.p`
  margin: ${(props) => props.margin ?? "5px 0"};
  font-size: 0.95rem;
  border: ${(props) => props.borderC};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.p};
  border-radius: ${(props) => props.br};
`;

export const Image = styled.img`
  width: 50%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 50px 35px;
  padding: 20px;
`;

export const CardElement = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  cursor: pointer;
  background-color: ${(props) => props?.bg};
`;

export const CardBox = styled.div`
  margin: ${(props) => props.margin ?? "0px 0 20px 30px"};
  width: ${(props) => props.width ?? ""};
  padding-left: ${(props) => props.pl ?? ""};

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const ImgCountry = styled.img`
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "180px"};
  border-radius: ${(props) => props.radius ?? "5px 5px 0 0"};

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ContainerInput = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

export const InputSearch = styled.input`
  width: 18rem;
  border: none;
  border-radius: 5px;
  padding: 15px 50px;
  background-color: ${(props) => props?.bg};
  color: ${(props) => props?.color};

  &::placeholder {
    color: ${(props) => props?.color};
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SelectList = styled.select`
  width: 170px;
  padding: 15px 15px 15px 5px;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  background-color: ${(props) => props?.bg};
  color: ${(props) => props?.color};
`;

export const Options = styled.option`
  border: 2px solid red;
`;

export const DetailContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 4em 50px 2em 10px;
  height: 330px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    //justify-content: space-evenly;
    margin: 4em 0px 2em 0px;
    height: 100%;
  }
`;

export const Columns = styled.div`
  flex: 1;
`;
