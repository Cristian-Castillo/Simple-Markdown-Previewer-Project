import React, { Component } from 'react'
import './miniBoxStyle.css'
import {SiWindows95} from "react-icons/si"

export class miniBox extends Component {
    render() {
        return (
        <div className = 'container'>
            <div className = 'header'><h5><span><SiWindows95 className ='windows'/> Editor</span></h5></div>
            <div className = 'body'>
                <div className = 'content'>
                    <p> Content</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf asdfasdfasd asdfasdfasd asdfasdfasdfasdasdfasdfasdaasdfasdfasdasdfasdfasdsdfasd</p>
                    <p> asdfasdfasdfasdf asdfasdfasd asdfasdfasd asdfasdfaasdfasdfasdasdfasdfasdasdfasdasdfasdfasdasdfasdfasdfasdsd</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf asdfasdfasd asdfasdfasdfasdfasdasdfasdfasdasdfasdfaasdfasdfasdasdfasdfasdsdasd</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                </div>
            </div>
        </div>
        )
    }
}

export default miniBox


/* 

import React, { Component } from 'react'
import './miniBoxStyle.css'

export class miniBox extends Component {
    render() {
        return (
          <div className = 'container'>
              <div className = 'header'>header</div>
              <div className = 'body'>
                <div className = 'content'>
                    <p> Content</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <p>Lorem ipsum asdfasdfsfasdfasf</p>
                    <p> asdfasdfasdfasdf</p>
                    <div className = 'footer'>Foot</div>
                </div>

              </div>
          </div>
        )
    }
}

export default miniBox
*/