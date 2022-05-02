import { MainContainer, Front, BoxContainer, Back, Left, Right, Top, Bottom } from "./styles";

const Cube = () => {
  return (
    <MainContainer>
      <BoxContainer>
        <Front></Front>
        <Back></Back>
        <Left></Left>
        <Right></Right>
        <Top></Top>
        <Bottom></Bottom>
      </BoxContainer>
    </MainContainer>
  );
};

export default Cube;
