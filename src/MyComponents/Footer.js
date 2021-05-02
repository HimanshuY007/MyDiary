import React from 'react'
import './Stylesheets/footerstyle.css'
export const Footer = () => {
    return (
        <div className="footbar">
            <div><span className="material-icons" style={{fontSize:32}}>home</span></div>
            <div><span className="material-icons" style={{fontSize:32}}>search</span></div>
            <div><span className="material-icons" style={{fontSize:32}}>add_circle_outline</span></div>
            <div><span className="material-icons" style={{fontSize:32 ,color:"rgb(51, 99, 201)"}}>date_range</span></div>
            <div><span className="material-icons" style={{fontSize:32}}>account_circle</span></div>
        </div>
    )
}
