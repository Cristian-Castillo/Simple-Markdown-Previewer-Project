import React, { Component } from 'react'

import './containerStyle.css'
import './miniBoxStyle.css'
import './bigBoxStyle.css'

import {SiWindows95} from "react-icons/si"
import Badge from "react-bootstrap/Badge";

let marked = require("marked");



export default class container extends Component {
    constructor(props){
        super(props)
        this.state = {
            markdown: "",
        };
    }

    updateMarkdown(markdown) {
        this.setState({ markdown });
    }

    render() {return (
<div style ={{marginTop:'15px',marginLeft:'8px',marginRight:'8px',marginBottom:'60px'}}>
    <div className = 'container'>
        <div className = 'header'><h5><span><SiWindows95 className ='windows' /> Editor</span></h5></div>
            <div className = 'body'>
           
                    <textarea
                    value={this.state.markdown}
                    className = 'content'
                    onChange={(e) => {
                        this.updateMarkdown(e.target.value)
                    }}
                    ></textarea>
                
            </div>
        </div>
        <div style = {{marginLeft:'20px', marginRight:'20px'}} className = 'containerBigBox'>
            <div className = 'headerBigBox'><h5><span><SiWindows95 className ='windows' /> Previewer</span></h5></div>
                <div className = 'bodyBigBox'>
                    <div className = 'contentBigBox'>
                        <div dangerouslySetInnerHTML={{
                                __html: marked(this.state.markdown),
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
