import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  padding: 0.5rem;
  min-height: 35rem;
  width: 100%;
  box-sizing: border-box;
  textarea {
    box-sizing: border-box;
    font-size: 1rem;
    border: none;
    width: 100%;
    outline: transparent;
    height: -webkit-fill-available;
  }
`;

const Editor = ({ value, changeHandler }) => (
  <Wrapper>
    <textarea id="editor" type="text" value={value} onChange={changeHandler} />
  </Wrapper>
);

export default Editor;
