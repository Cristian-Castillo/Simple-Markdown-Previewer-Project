import React, { Component } from 'react'
import './containerStyle.css'
import MiniBox from './miniBox'
import BigBox from './bigBox'

export default class container extends Component {


    render() {
        return (
            <div style ={{marginTop:'15px',marginLeft:'8px',marginRight:'8px',marginBottom:'60px'}}>
                <MiniBox />
                <BigBox />
                
            </div>
        )
    }
}
