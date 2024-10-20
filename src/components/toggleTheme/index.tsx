import styled from "styled-components";

const ToggleTheme = () => {
  const randomId = Math.random().toString(36).substring(7);

  return (
    <Container>
      <Circle id={randomId} />
      <Label htmlFor={randomId} />
    </Container>
  );
};

export default ToggleTheme;

const Container = styled.div`
  position: relative;
  background: gray;
  height: 30px;
  width: 45px;
  border-radius: 24px;
  overflow: hidden;
`;

const Circle = styled.input.attrs({ type: "checkbox" })`
  display: none;
  + label {
    left: 2px;
    background: white;
    &::after {
      font-size: 16px;
      content: "🌞";
    }
  }
  &:checked + label {
    left: 16px;
    background: black;
    &::after {
      font-size: 16px;
      content: "🌙";
    }
  }
`;

const Label = styled.label`
  transition: all 0.25s 0s ease-in-out;
  position: absolute;
  top: 2px;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:hover {
    transform: scale(0.75);
  }
`;
