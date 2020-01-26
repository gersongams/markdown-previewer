import React from "react";
import styled from "styled-components";
import marked from "marked";

const Wrapper = styled.div`
  background: white;
  padding: 0.5rem;
  min-height: 35rem;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  img {
    width: 100%;
  }
  th {
    border: solid 2px lightgrey;
  }
  td {
    border: solid 2px lightgrey;
  }
`;
// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};

const Renderer = ({ value }) => (
  <Wrapper>
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(value, { renderer: renderer })
      }}
    />
  </Wrapper>
);

export default Renderer;
