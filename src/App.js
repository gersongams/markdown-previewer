import React from "react";
import "./styles.css";
import Container from "./Container";
import Header from "./Header";
import Editor from "./Editor";
import Renderer from "./Renderer";
import styled from "styled-components";

const StyledApp = styled.main`
  .title {
    color: white;
    text-align: center;
    margin-bottom: 1rem;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
    /* grid-auto-columns: 1fr 1fr; */
    /* grid-auto-flow: column; */
    grid-gap: 2rem;
    min-height: 0; /* NEW */
    min-width: 0; /* NEW; needed for Firefox */
  }
`;

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default class App extends React.Component {
  state = {
    editor: placeholder,
    renderer: ""
  };

  editorChange = event => {
    this.setState({ editor: event.target.value });
  };

  render() {
    const { editor } = this.state;
    return (
      <StyledApp>
        <h1 className={"title"}>Markdown Previewer</h1>
        <div className="wrapper">
          <Container>
            <Header title="Editor" />
            <Editor value={editor} changeHandler={this.editorChange} />
          </Container>
          <Container>
            <Header title="Renderer" />
            <Renderer value={editor} />
          </Container>
        </div>
      </StyledApp>
    );
  }
}
