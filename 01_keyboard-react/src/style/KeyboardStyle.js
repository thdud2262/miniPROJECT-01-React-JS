import styled from "styled-components";
import "./App.css";

export const KeyboardSection = styled.section`
  background-color: gray;
  color: gray;
  width: 1050px;
  margin: 0 auto;
  border-radius: 4px;
`;
export const Row = styled.div`
  display: flex;
`;
export const Key = styled.div`
  /* border: 1px solid red; */
  width: 60px;
  height: 60px;
  margin: 5px;
  padding: 8px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.align ? "space-between;" : "center;")};
  align-items: center;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
`;
export const f_key = styled.div(Key);
export const Backspace = styled(Key)`
  width: 130px;
  justify-content: center;
`;
export const FnKey = styled(Key)`
  width: 95px;
`;
export const CapsKey = styled(Key)`
  width: 110px;
`;
export const EnterKey = styled(Key)`
  width: 150px;
`;
export const LeftShift = styled(Key)`
  width: 145px;
`;
export const RightShift = styled(Key)`
  width: 185px;
`;
export const SubKey = styled(Key)`
  width: 80px;
`;
export const SpaceKey = styled(Key)`
  width: 420px;
`;
