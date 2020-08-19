import React, { Component } from 'react'
import './bigBoxStyle.css'
import {SiWindows95} from "react-icons/si"

export class bigBox extends Component {
    render() {
        return (
            <div className = 'containerBigBox'>
            <div className = 'headerBigBox'><h5><span><SiWindows95 className ='windows' /> Previewer</span></h5></div>
            <div className = 'bodyBigBox'>
                <div className = 'contentBigBox'>
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

export default bigBox
