import React, { Component } from 'react'
import ReactDOM from "react-dom";

import './containerStyle.css'
import './miniBoxStyle.css'
import './bigBoxStyle.css'

import {SiWindows95} from "react-icons/si"

let marked = require("marked");

// Allows line breaks with return button
marked.setOptions({
    breaks: true
});

// Set a function to be used by the marked Renderer, the bit that takes markdown and translates it to html.
const renderer = new marked.Renderer();


export default class container extends Component {
    constructor(props) {
        super(props);
            this.state = {
                markdown: placeholder
            };
        this.handleChange = this.handleChange.bind(this);
        }
        handleChange(e) {
            this.setState({
                markdown: e.target.value
            });
        }

    render() {
        return (
        <div style ={{marginTop:'15px',marginLeft:'8px',marginRight:'8px',marginBottom:'60px'}}>
            <div className = 'container'>
                <div className = 'header'><h5><span><SiWindows95 className ='windows' /> Editor</span></h5></div>
                    <div className = 'body' >
                    <Toolbar text="$ Editor:" />
                    <Editor
                    markdown={this.state.markdown}
                    onChange={this.handleChange}
                    />
                </div>
            </div>
        <div  style = {{marginLeft:'20px', marginRight:'20px'}} className = 'containerBigBox'>
            <div className = 'headerBigBox'><h5><span><SiWindows95 className ='windows' /> Previewer</span></h5></div>
                <div className = 'bodyBigBox'>
                    <div className = 'contentBigBox'>
                        <div>
                        <Toolbar text="$ Previewer:" />
                        <Previewer markdown={this.state.markdown} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const Toolbar = props => {
    return <div className="toolbar">{props.text}</div>;
};


const Previewer = props => {
    return (
      <div
        id="previewer"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: renderer })
        }}
      />
    );
  };

  const Editor = props => {
    return (
      <textarea
        id="editor"
        value={props.markdown}
        onChange={props.onChange}
        type="text"
        style = {{backgroundColor:'black',color:'var(--customGreen)'}}
      />
    );
  };

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

There's also [links](https://cristian-castillo.vercel.app/), and
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


